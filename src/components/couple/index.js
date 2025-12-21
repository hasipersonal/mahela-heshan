import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/img-1.jpg'
import couple2 from '../../images/couple/img-2.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Couple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Mahela Heshan</h3>
                                            <p>Son of Mr & Mrs. Ekanayaka</p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><a href="https://www.facebook.com/shanekanayake98" target="_blank"><span className="fa fa-facebook"></span></a></li>
                                                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                                                <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Nelum Madhumali</h3>
                                            <p>Daughter of Mr. & Mrs. Warnasooriya</p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><a href="https://www.facebook.com/profile.php?id=100071916755380" target="_blank"><span className="fa fa-facebook"></span></a></li>
                                                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                                                <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;