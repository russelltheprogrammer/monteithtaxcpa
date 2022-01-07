const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const userName = process.env.USERNAME;
const clientIdCode = process.env.CLIENTIDCODE;
const clientSecretCode = process.env.CLIENTSECRETCODE;
const refreshTokenCode = process.env.REFRESHTOKENCODE;


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 3001, () => console.log("Server Running"));
 

const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: userName,
        clientId: clientIdCode,
        clientSecret: clientSecretCode,
        refreshToken: refreshTokenCode
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

router.post("/api/", (req, res) => {
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
        html: `<p><b>Name:</b> ${lastname} , ${firstname}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Phone Number:</b> ${phonenumber}</p>
               <p><b>Message:</b> ${message}</p>`,
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


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


// CODE FOR POSSIBLE CORS ISSUE

// const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://monteithtaxcpa.herokuapp.com/']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(helmet())

// --> Add this

// app.use(cors(corsOptions));