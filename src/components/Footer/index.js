import React from 'react';

import FooterWrapper from './styled/footer';

const Footer = props => {
    let content =  (
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
                            />
                            <button>Sign Up</button>
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
            <div className="container mt-5 mt-5 pb-5">
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
                        <ul style={{ marginLeft: "-35px" }}>
                            <li li style={{ listStyleType: "none" }}>About Us</li>
                            <li li style={{ listStyleType: "none" }}>Careers</li>
                            <li li style={{ listStyleType: "none" }}>Blog</li>
                            <li li style={{ listStyleType: "none" }}>Press</li>
                            <li li style={{ listStyleType: "none" }}>Gift Cards</li>
                        </ul>
                    </div> 
                    <div className="col-md-2">
                        <p><strong>Support</strong></p>
                        <ul style={{ marginLeft: "-35px" }}>
                            <li li style={{ listStyleType: "none" }}>Contact</li>
                            <li li style={{ listStyleType: "none" }}>Legal</li>
                            <li li style={{ listStyleType: "none" }}>Privacy Policy</li>
                            <li li style={{ listStyleType: "none" }}>Terms of Use</li>
                            <li li style={{ listStyleType: "none" }}>Sitemap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>   
    );
    return content ; 
}

export default Footer
