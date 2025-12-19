import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/1.jpg'
import strory2 from '../../images/events/2.jpg'
import strory3 from '../../images/events/3.jpg'
import LocationMap from '../LocationModal/LocationModal'

import './style.css'

const Location = () => {
    return (
        <div id="event" className="service-area section-padding">
            <div className="container">
                <Sectiontitle section={'When & Where'} />
                <div className="service-area-menu">
                    <div className="Ceremony-wrap">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ceromony-img">
                                    <img src={strory1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ceromony-content">
                                    <h3>Poruwa Ceremony</h3>
                                    <span><b>Friday, 23 January 2026, 10.28 AM</b></span>
                                    <span>Hotel Gal Arana Reception Hall, Thambuttegama</span>
                                    <p>Steeped in ancient heritage, the Poruwa ceremony marks the sacred union of two souls. Upon this decorated platform, we seek the blessings of the Triple Gem, the gods, and our elders as we bind our lives together in love and harmony.</p>
                                    {/* <LocationMap buttonClass={'location-btn'} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="ceromony-content ceromony-content2">
                                <h3>Wedding Party</h3>
                                <span><b>Friday, 23 January 2026, 11.30 AM - 3.00 PM</b></span>
                                <span>Hotel Gal Arana Reception Hall, Thambuttegama</span>
                                <p>The most important part of our day is sharing it with you. Please join us for a celebration filled with love, laughter, and delicious food as we toast to a new chapter in our lives together.</p>
                                {/* <LocationMap buttonClass={'location-btn'} /> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Reception Party</h3>
                                <span><b>Friday, 23 January 2026, 3.00 PM - 4.30 PM</b></span>
                                <span>Hotel Gal Arana Reception Hall, Thambuttegama</span>
                                <p>As our perfect day draws to a close, we invite you to stay for afternoon tea and the Going Away ceremony. Join us in making these final moments memorable as we start our journey as husband and wife.</p>
                                {/* <LocationMap buttonClass={'location-btn'} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;