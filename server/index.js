import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import nodemailer from "nodemailer";
import { contactTemplate } from "./templates/contactTemplate.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8000;

app.post("/sendMessage", (req, res) => {
  const { uname, phone, email, message } = req.body;
  var transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
      user: "info@cityboxcargo.com",
      pass: "@Citybox123#"
    }
  });

  var mailData = {
    from: '"senderNameSameLikeTheZohoOne" <info@cityboxcargo.com>',
    // from: 'info@cityboxcargo.com',
    to: 'info@cityboxcargo.com',
    subject: `You have a message from ${uname}`,
    html: contactTemplate(uname, phone, email, message),
  };

  transport.sendMail(mailData, (error, info) => {
    console.log(mailData)
    if (error) {
      return console.log(error);
    } else {
      return console.log("mail sent");
    }
  });
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
