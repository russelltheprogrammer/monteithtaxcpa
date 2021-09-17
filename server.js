
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "infomonteithtaxcpa@gmail.com",
        pass: "TechMan900",
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
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: firstname + " " + lastname,
        to: "infomonteithtaxcpa@gmail.com",
        subject: subject,
        html: `<p>Name: ${firstname} ${lastname}</p>
               <p>Email: ${email}</p>
               <p>Message : ${message}</p>`,
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




fff


// // Chunk 1
// const express = require('express');
// const { applyDependencies } = require('mathjs');

// const app = express();
// const path = require('path');


// const PORT = 5000;


// // Data parsing
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', ));
// });


// app.listen(PORT, () => {
//     console.log(`Server is starting on PORT ${PORT}`);
// });