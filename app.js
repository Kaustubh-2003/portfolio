const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

dotenv.config();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index');
});


// app post request 


app.post('/send-mail', (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other SMTP service provider
      auth: {
        user: 'work.microbit@gmail.com',
        pass: 'bjde sqkq gcsk sprh'
      }
    });
  
    // Email content
    const mailOptions = {
      from: 'work.microbit@gmail.com', // Sender address
      to: 'er.kaustubh.pandey@gmail.com', // Receiver address
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect("/");
      }
    });
  });
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
