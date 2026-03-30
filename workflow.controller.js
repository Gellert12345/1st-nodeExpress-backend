import dayjs from "dayjs";
import Subscription from "../models/subscrition.model.js";
import {createRequire} from "module";
const requires = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");

export const   sendReminder = serve(async (context) =>{
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);
    if (!subscription || subscription.status !== active) return;
    const renewalDate = dayjs(subscription.renewalDate);
    if(renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}`);
    }
});
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run("Get subscription",() =>{
        return Subscription.findById(subscriptionId).populate("user","name email");

    })
}