import React from 'react'
// You can remove the Link import if it is not used elsewhere in this file
// import {Link} from 'react-router-dom' 
import './style.css'
import LocationMap from '../LocationModal/LocationModal'

const Welcome = () => {

    // 1. Configure your WhatsApp details here
    const phoneNumber = "+94768914181"; // Format: Country code + Number (No '+' or spaces)
    const message = "Hello, I would like to confirm my attendance for the wedding!"; // Your default message
    
    // 2. Create the URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Request the pleasure of you company at the ceremony of our wedding</p>
                            <h4 className='text-white mb-4'>23rd January, 2026 from 10.00 AM at <b>Hotel Gal Arana Reception Hall, Thambuttegama</b></h4>
                            
                            {/* 3. Updated Button using <a> tag instead of <Link> */}
                            <div className="btn">
                                <a 
                                    href={whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }} // Ensures it looks like your original button
                                >
                                    RSVP
                                </a>
                            </div>

                            <LocationMap buttonClass={'location-btn'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;