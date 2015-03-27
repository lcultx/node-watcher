/**
 * Created by yang on 15/3/27.
 */
var nodemailer = require('nodemailer');
var mailConfig  = require('./../config').mailConfig;

var smtpTransport = nodemailer.createTransport("SMTP",mailConfig.config);



function sendMail(to,subject, html) {
    var mailOptions = {
        from: [mailConfig.name, mailConfig.config.auth.user].join(' '),
        to: to,
        subject: subject,
        html: html
    };

    smtpTransport.sendMail(mailOptions, function(error, response){
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + response.message);
        }
        smtpTransport.close();
    });
};

exports.sendMail = sendMail;

