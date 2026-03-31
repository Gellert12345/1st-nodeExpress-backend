import nodemailer from "nodemailer";
import {EMAIL_PASSWORD} from  "./env.js"
export const accountEmail = "1234@gmail.com";
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: accountEmail, //innen fogjak kapni a felhaszalok az uzenteket!
        pass: EMAIL_PASSWORD
    }
})
export default transporter;