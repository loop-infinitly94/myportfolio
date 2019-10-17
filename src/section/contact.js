import React from 'react';

const nodemailer = require('nodemailer');

const Contact = () => {

    const sendMail = () => {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // console.log(name, email, message)
        // return
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'loop.infinitly@gmail.com',
              pass: 'Shyam@test2708'
            }
          });
          
          var mailOptions = {
            from: email,
            to: 'loop.infinitly@gmail.com',
            subject: 'mail from ' + name,
            text: message
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }

    return (
        <section id="contact" className="section">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">Let's get in touch</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="col-2-3 col-wrap centered text-center">
						<div className="row">
							<div className="col-full" style={{"marginBottom": "25px"}}>
								Need anything built, want to work together or simply want to have a chat?<br />Drop me an e-mail at shyamkumar2794@gmail.com or simply fill out the form below and I will reply to you soon!								
                                <input type="hidden" id="thank_you" value="Thank you for contacting me!"/>
							</div>
						</div>
						
						<div id="form-contact-container">
							<div className="col-full">
								<input type="text" name="name" id="name" placeholder="Name"/>
							</div>
							<div className="col-full">
								<input type="text" name="email" id="email" placeholder="E-mail address"/>
							</div>
							<div className="col-full">
								<textarea name="message" id="message" rows="4" placeholder="Your message"></textarea>
							</div>
							<div className="col-full">
								<button className="button button-medium button-submit ladda-button" data-style="expand-right" id="submit-contact" onClick = {() => {sendMail()}}>Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Contact;