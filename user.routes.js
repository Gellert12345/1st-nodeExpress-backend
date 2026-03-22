import {Router} from 'express';
const userRouter = Router();
//GET /users=> get all user
// GET /users/:id => get user by id      (123 3113)
//ezek általába userek lekérése adatbazispol igyszokott kinézni
userRouter.get("/", (req,res) => res.send({title:"GET all users"})); // user roputes ===felhasznalói utvonalak
userRouter.get("/:id", (req,res) => res.send({title:"GET user details "}));
userRouter.post("/", (req,res) => res.send({title:"Creat a new user"}));
userRouter.put("/:id", (req,res) => res.send({title:"Update user"}));
userRouter.delete("/:id", (req,res) => res.send({title:"Delete user"}));
export default userRouter;
