import {createRequire} from "module";
const requires = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");

export const   sendReminder = serve(async (context) =>{
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);
    if (!subscription || subscription.status !== active) return;
    const renewalDate = new Date(subscription.renewalDate);
});
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run("Get subscription",() =>{
        return Subscription.findById
    })
}