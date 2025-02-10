import nodemailer from "nodemailer";
import {EMAIL_ADDRESS, EMAIL_PASSWORD} from "./env.js";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
    }

})
export default transporter