import mongoose from "mongoose";
import { DB_URI,NODE_ENV} from "../config/env.js";

//db_uri =>  az adatbázis cime!
//node_env => futtatási környezet !

if (!DB_URI) {
    throw new Error("Please define the MONGODB_URI enviroment variable inside .env.<development/production>.local");
}
export const connectToDatabase = async () => {
    try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to database",error);
        process.exit(1);
    }
}