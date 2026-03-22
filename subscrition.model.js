import mongoose from "mongoose";
const subscription = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true,"Subscription price is required"],
        min: [0, "Price must be greater than 0"]
    },
    currency: {
        type:String,
        enum: ["USD","EUR","GBP"],
        default: "USD"
    },
    frequency: {
        type: String,
        enum: ["daily","weekly","monthly","yearly"],
    },
    category: {
        type: String,
        enum: ["sports","news","entertainment",]
    }
})