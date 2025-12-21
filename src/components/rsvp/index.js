import React, { Component } from 'react';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS
import './style.css'

class Rsvp extends Component {

    constructor(props) {
        super(props);
        this.form = React.createRef(); // 2. Create a ref to access the form element
    }

    state = {
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    }

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name, email, rsvp, events, notes, error } = this.state;

        // Validation Logic
        if (name === '') error.name = "Please enter your name";
        if (email === '') error.email = "Please enter your email";
        if (rsvp === '') error.rsvp = "Select your number of rsvp";
        if (events === '') error.events = "Select your event list";
        if (notes === '') error.notes = "Please enter your note";

        if (Object.keys(error).length > 0) {
            this.setState({ error });
        }

        // Check if there are NO errors before sending
        if (!error.name && !error.email && !error.rsvp && !error.events && !error.notes) {
            
            // 3. Send Email using EmailJS
            // Replace these strings with your actual IDs from Step 2
            const SERVICE_ID = 'service_ftf56d7';
            const TEMPLATE_ID = 'template_2xix6vb';
            const PUBLIC_KEY = '1IoX4qwn6oCYR1v04';

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this.form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log('Email successfully sent!', result.text);
                    alert("Message Sent Successfully!");
                    
                    // Clear form after successful send
                    this.setState({
                        name: '',
                        email: '',
                        rsvp: '',
                        events: '',
                        notes: '',
                        error: {}
                    });
                }, (error) => {
                    console.log('Failed to send email:', error.text);
                    alert("Failed to send message. Please try again.");
                });
        }
    }

    render() {
        const { name, email, rsvp, events, notes, error } = this.state;
        
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="col-12">
                                    <div className="section-title section-title4 text-center">
                                        <h2>Be Our Guest</h2>
                                        <p>Please reserve before January 5th, 2026.</p>
                                    </div>
                                </div>
                                {/* 4. Attach the ref to the form tag */}
                                <form ref={this.form} onSubmit={this.subimtHandler}>
                                    <div className="contact-form form-style">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" value={name} onChange={this.changeHandler} placeholder="Your Name*" id="fname" name="name" />
                                                <p>{error.name ? error.name : ''}</p>
                                            </div>
                                            <div className="col-12  col-sm-6">
                                                <input type="text" placeholder="Your Email*" onChange={this.changeHandler} value={email} id="email" name="email" />
                                                <p>{error.email ? error.email : ''}</p>
                                            </div>
                                            <div className="col col-sm-6 col-12">
                                                <select className="form-control" onChange={this.changeHandler} value={rsvp} name="rsvp">
                                                    <option disabled value="">Number Of rsvp*</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <p>{error.rsvp ? error.rsvp : ''}</p>
                                            </div>
                                            <div className="col col-sm-6 col-12">
                                                <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                                                    <option disabled value="">I Am Attending*</option>
                                                    <option value="All events">All events</option>
                                                    <option value="Wedding ceremony">Wedding ceremony</option>
                                                    <option value="Reception party">Reception party</option>
                                                </select>
                                                <p>{error.events ? error.events : ''}</p>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Message" name="notes"></textarea>
                                                <p>{error.notes ? error.notes : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button id="submit" type="submit" className="submit">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;