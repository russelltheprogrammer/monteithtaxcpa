const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.SERVERPORT;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const emailService = process.env.EMAILSERVICE;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: emailService,
    auth: {
        user: userName,
        pass: password,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to Send")
    }
});

router.post("/contact", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: lastname + "," + firstname,
        to: userName,
        subject: subject,
        html: `<p>Name: ${lastname} , ${firstname}</p>
               <p>Email: ${email}</p>
               <p>Phone Number: ${phonenumber}</p>
               <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR"});
        }
        else {
            res.json({ status: "Message Sent" });
        }
    });
});