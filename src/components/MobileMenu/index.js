import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="close" onClick={this.menuHandler}><i className='fa fa-close'></i></div>
                    
                    <div className="logo2">
                        {/* Added onClick so clicking the logo also closes the menu */}
                        <h2><Link to='/home' onClick={this.menuHandler}>Mahela & Nelum</Link></h2>
                    </div>
                    
                    <ul className="responsivemenu">
                        <li>
                            {/* Home Link: Closes menu AND scrolls to top */}
                            <Link 
                                to='/' 
                                onClick={() => {
                                    this.menuHandler();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        {/* Other Links: Added onClick={this.menuHandler} to close menu on selection */}
                        <li><AnchorLink onClick={this.menuHandler} href='#couple'>Couple</AnchorLink></li>
                        <li><AnchorLink onClick={this.menuHandler} href='#event'>Events</AnchorLink></li>
                        <li><AnchorLink onClick={this.menuHandler} href='#gallery'>Gallery</AnchorLink></li>
                        <li><AnchorLink onClick={this.menuHandler} href='#rsvp'>Rsvp</AnchorLink></li>
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}