import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
    createSubscription,
    getUserSubsciptions,
} from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();
//
subscriptionRouter.get("/",(req,res) => res.send({title:"GET all subscription"}));
subscriptionRouter.get("/:id",(req,res) => res.send({title:"GET subscription details"}));
subscriptionRouter.post("/",authorize,createSubscription);
subscriptionRouter.put("/:id",(req,res) => res.send({title:"Update subscription"}));
subscriptionRouter.delete("/:id",(req,res) => res.send({title:"Delete subscription"}));
subscriptionRouter.get("/user/:id",authorize,getUserSubsciptions);
subscriptionRouter.put("/:id/cancel",(req,res) => res.send({title:"Cancel subscription"}));
subscriptionRouter.get("/upcoming-renewals",(req,res) => res.send({title:"Get upcoming renewals"})); //közelgő megújítások!
export default subscriptionRouter;