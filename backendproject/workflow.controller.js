// sendReminder.js
import dayjs from "dayjs";
import Subscription from "../models/subscription.model.js";
import { sendReminderEmail } from "../utils/send-email.js";
const REMINDERS = [7, 5, 2, 1];

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");

// Fő workflow export
export const sendReminder = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;

    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== "active") return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const label = `Reminder ${daysBefore} days before`;
        const reminderDate = renewalDate.subtract(daysBefore, "day");

        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, label, reminderDate);
        }

        await triggerReminder(context, label, subscription);
    }
});

// Segédfüggvény: lekéri a subscription-t DB-ből
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run("Get subscription", async () => {
        return Subscription.findById(subscriptionId).populate("user", "name email");
    });
};

// Segédfüggvény: workflow sleep
const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
};

// Segédfüggvény: email küldés trigger
const triggerReminder = async (context, label, subscription) => {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} reminder`);

        await sendReminderEmail({
            to: subscription.user.email,
            type: label,
            subscription
        });
    });
};