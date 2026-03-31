import {Router} from 'express';
import {getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();
//GET /users=> get all user
// GET /users/:id => get user by id      (123 3113)
//ezek általába userek lekérése adatbazispol igyszokott kinézni
userRouter.get("/",  getUsers); // user roputes ===felhasznalói utvonalak
userRouter.get("/:id",authorize,getUsers);
userRouter.post("/", (req,res) => res.send({title:"Creat a new user"}));
userRouter.put("/:id", (req,res) => res.send({title:"Update user"}));
userRouter.delete("/:id", (req,res) => res.send({title:"Delete user"}));
export default userRouter;
