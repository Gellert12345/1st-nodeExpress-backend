import Subscription from "../models/subscrition.model.js";

export const createSubscription = async (req, res, next) => {
    try {

        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        res.status(201).json({
            success: true,
            data: subscription
        });

    } catch (e) {
        next(e);
    }
}
export const getUserSubsciptions = async (req, res, next) => {
    try {
        //nezd meg hogy az user egyelő a tokenel
        if(req.user.id !== req.params.id) {
            const error = new Error("You are not the owner of this account");
            error.status = 401;
            throw error;
        }
        const subscriptions = await Subscription.find({user: req.params.id})
        res.status(200).json({success:true, data:subscriptions}) //vissza küldi a szerver az adatokat ha mindenfasza
    } catch (e) {
        next(e);
    }
}