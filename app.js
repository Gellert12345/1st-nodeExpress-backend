import express from "express";
import  {PORT} from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import {connectToDatabase} from "./database/mongodb.js";
const app = express();
// api/v1/auth/signup
app.use("/api/v1/auth", authRouter); //máshol van definálva de itt is hasznalhatjuk
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
//app == express / az a eléris út req/res kérés válasz
app.get("/", (req, res) => {
    res.send("szeva tesi!");
});

app.listen(PORT, async () =>{ //
    console.log(`Listening on port ${PORT}`);
    await connectToDatabase();
});
export default app;