var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(smtpTransport({
  host: 'email-smtp.us-west-2.amazonaws.com',
  port: 465,
  secure: true,
  auth: {
    user: 'awsid',
    pass: 'awskey'
  }
}));

var mailOptions = {
  from: 'Foo <foo@fooooo.com>', // sender address
  to: 'hello@yourcompany.com', // list of receivers
  subject: 'Hello', // Subject line
  text: 'Hello world', // plaintext body
  html: '<b>Hello world</b>' // html body
};

transport.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  }
  else{
    console.log('Message sent: ' + info.response);
  }
});
