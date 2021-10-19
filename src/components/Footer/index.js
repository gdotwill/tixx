import React, { useState } from 'react';

import FooterWrapper from './styled/footer';

import Links from './styled/links';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

const Footer = () => {
    const reg = /^(?!.*\.{2})([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const [email, setEmail] = useState('');

    const [validated, setValidated] = useState(true);

    const handleSignUp = (e) => {
        const email = e.target.value;
        setEmail(email);
        setValidated(email === '' || !reg.test(email));
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setValidated(true)
    }
    const handleShow = () => setShow(true);

    return  (
        <>
            <FooterWrapper className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1> Join our mailing list to stay in the loop </h1>
                        </div>
                        <div className="col-md-12">
                            <input 
                                type="text"
                                placeholder="Please Enter Your Email Address"
                                onChange={handleSignUp}
                                value={email}
                            />
                            <button
                             disabled={validated}
                             onClick={handleShow}
                            >
                                Sign Up
                            </button>
                            

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Body> Thank you for subscribing !</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <img alt="icon_location" class="icon_location mr-5" src="../../images/social/YT_icon.png" /> 
                            <img alt="icon_location" class="icon_location mr-5" src="../../images/social/IG_icon.png" /> 
                            <img alt="icon_location" class="icon_location mr-5" src="../../images/social/FB_icon.png" />  
                            <img alt="icon_location" class="icon_location mr-5" src="../../images/social/TW_icon.png" />   
                        </div>
                    </div>
                </div>
            </FooterWrapper>

            <Links>
                <div className="container links mt-5 mt-5 pb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <p><strong>Popular Destinations</strong></p>
                            <p>lorem</p>
                        </div>
                        <div className="col-md-3">
                            <p><strong>Popular Experiences</strong></p>
                            <p>Lorem</p>
                        </div>
                        <div className="col-md-2">
                            <p><strong>Company</strong></p>
                            <ul>
                                <li>
                                    <Link to="about-us">
                                        About Us
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="careers">
                                        Careers
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="blog">
                                        Blog
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="press">
                                        Press
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="gift-cards">
                                        Gift Cards
                                    </Link>  
                                </li>
                            </ul>
                        </div> 
                        <div className="col-md-2">
                            <p><strong>Support</strong></p>
                            <ul>
                                <li>
                                    <Link to="contact">
                                        Contact
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="legal">
                                        Legal
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="privacy">
                                        Privacy Policy
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="terms">
                                        Terms of Use
                                    </Link>  
                                </li>
                                <li>
                                    <Link to="sitemap">
                                        Sitemap
                                    </Link>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Links>

            
        </>   
    );
}

export default Footer
