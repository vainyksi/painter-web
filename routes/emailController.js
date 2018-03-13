let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var express = require('express');

module.exports.sendMail = (req, res, next) => {
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: 'malujemrazdva@gmail.com', // TODO move to config, send to multiple receivers
                        },
                    ],
                    subject: 'malujem.sk - kontaktny formular',
                },
            ],
            from: {
                email: req.body.name + ' <' + req.body.email + '>',
            },
            content: [
                {
                    type: 'text/plain',
                    value: req.body.message,
                },
            ],
        },
    });

    //With promise
    sg.API(request)
        .then(response => {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        })
        .catch(error => {
            //error is an instance of SendGridError
            //The full response is attached to error.response
            console.log(error.response.statusCode);
        });

    res.render('index', {
        anchor: 'message_sent',
        senderName: req.body.name,
        senderMail: req.body.email,
        mesageSent: req.body.message,
        twitterLink: "#",
        facebookLink: "https://facebook.com/malujem.sk/photos/",
        instagramLink: "#"
    });
};