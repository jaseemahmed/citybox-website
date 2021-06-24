import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());

const PORT = process.env.PORT || 4000
app.post("/send_mail", cors(), async (req, res) => {
  let  {text} = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  try {
    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "test@test.com",
        subject: "Enquiry from Website",
        html: `<div className="email" style="
                border: 1px solid black;
                padding: 20px;
                font-family: sans-serif;
                line-height: 2;
                font-size: 20px; 
                ">
                <h2>Website Enquiry</h2>
                <p>${text}</p>
            
                <p>All the best, Darwin</p>
                 </div>`,
      });
  } catch (error) {
      console.log(error)
  }

});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
