import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import LocationMap from '../LocationModal/LocationModal'

const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Request the pleasure of you company at the ceremony of our wedding</p>
                            <h4 className='text-white mb-4'>23rd January, 2026 from 10.00 AM at <b>Hotel Gal Arana Reception Hall, Thambuttegama</b></h4>
                            <div className="btn"><Link to="/home">RSVP</Link></div>
                            <LocationMap buttonClass={'location-btn'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;