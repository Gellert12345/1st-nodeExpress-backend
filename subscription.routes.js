import {Router} from "express";
const subscriptionRouter = Router();
//
subscriptionRouter.get("/",(req,res) => res.send({title:"GET all subscription"}));
subscriptionRouter.get("/:id",(req,res) => res.send({title:"GET subscription details"}));
subscriptionRouter.post("/",(req,res) => res.send({title:"Create subscription"}));
subscriptionRouter.put("/:id",(req,res) => res.send({title:"Update subscription"}));
subscriptionRouter.delete("/:id",(req,res) => res.send({title:"Delete subscription"}));
subscriptionRouter.delete("/user/:id",(req,res) => res.send({title:"Get all user subscription"}));
subscriptionRouter.delete("/:id/cancel",(req,res) => res.send({title:"Cancel subscription"}));
subscriptionRouter.delete("/upcoming-renewals",(req,res) => res.send({title:"Get upcoming renewals"})); //közelgő megújítások!
export default subscriptionRouter;