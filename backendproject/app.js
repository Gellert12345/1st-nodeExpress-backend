import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

import { connectToDatabase } from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import {signIn} from "./controllers/auth.controller.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js"
import workflowRouter from "./routes/workflow.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.get("/", (req, res) => {
    res.send("szeva tesi!");
});


// error handler mindig a végén
app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await connectToDatabase();
});

export default app;