import React from 'react';

import ThankYouWrapper from './styled';

import Testimonial from './styled/testimonial';

const ThankYou = () => {    
    return (
        <div className="bg-light pt-5 pb-5">
            <div className="container">
                <div style={{ margin: 'auto', width: '900px' }}>
                    <div className="row center">
                        <div className="col-md-12">
                            <img alt="icon_map" class="icon_map" src="../../images/check.png" />
                            <h1 className="header mt-3">Thank You For Booking!</h1>
                            <p className="mt-3">Booking & invoice detail will be sent to your email address: </p>
                            <p className="mt-2">Your booking reference is 000001</p>
                        </div>    
                    </div>
                    <ThankYouWrapper className="mt-3 pt-5">
                        <div className="row mt-3"> 
                            <div className="col-md-6 detail">
                                <h4>Passenger Detail</h4> 
                                <br />
                                <div className="row">
                                    <div className="col-md-1 right">
                                        <img alt="icon_map" class="icon_map" src="../../images/icons/user-icon.png" />
                                    </div>
                                    <div className="col-md-11 left">
                                        <p>Mr Jones</p>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-1 right">
                                        <img alt="icon_map" class="icon_map" src="../../images/icons/call.png" />
                                    </div>
                                    <div className="col-md-11 left">
                                        <p>+00 000 000</p>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-1 right">
                                        <img alt="icon_map" class="icon_map" src="../../images/icons/mail.png" />
                                    </div>
                                    <div className="col-md-11 left">
                                        <p>test@test.com</p>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-md-6 price-breakdown pl-5">
                                <h4>Price Breakdown</h4>
                                <br />
                                <div className="row">
                                    <div className="col-md-12 left">
                                        <p>$88 for Private Car</p>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="col-md-12 left">
                                        <p>10% Discount Applied</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 left" style={{ display: 'flex' }}>
                                        <h3>$88</h3><span style={{ marginTop: '12px' }}>Total</span>
                                    </div>
                                </div> 
                            </div>
                        </div> 

                        <h4 className="mt-5 left">Luxury Tour</h4>
                        <div className="mt-4">
                            <div style={{ display: 'flex' }}>
                                <p>Start Date: 25 Dec 2021</p>
                                <p className="ml-4">End Date: 25 Dec 2021</p>
                            </div> 
                            <div style={{ display: 'flex' }}>
                                <p>Duration: 2 Days</p>
                                <p className="ml-4">Party Size: 2 Adults</p>
                            </div> 
                        </div> 
                        
                        <div className="row mt-5">
                            <div className="col-md-1">
                                <h1>1</h1>
                            </div>
                            <div className="col-md-11" style={{ textAlign: 'left' }}>
                                <h5>Amsterdam North Canal Cruise</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/green.svg" /> </span>
                                    <p>Date: 25 Dec 2021 </p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/blue.svg" /> </span>
                                    <p>Time: 12:00PM</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/red.svg" /> </span>
                                    <p>Duration: 2 Days</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/red.svg" /> </span>
                                    <p>Breakfast: included</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/green.svg" /> </span>
                                    <p>Wheelchair: access needed</p>
                                </div> 

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-1">
                                <h1>2</h1>
                            </div>
                            <div className="col-md-11" style={{ textAlign: 'left' }}>
                                <h5>Private Zaan windmill 3-course dinner cruise from Amsterdam</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/green.svg" /> </span>
                                    <p>Date: 25 Dec 2021 </p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/blue.svg" /> </span>
                                    <p>Time: 12:00PM</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/red.svg" /> </span>
                                    <p>Duration: 2 Days</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/red.svg" /> </span>
                                    <p>Breakfast: included</p>
                                </div> 

                                <div className="info">
                                    <span className="mr-2"><img alt="" src="../../images/listing/green.svg" /> </span>
                                    <p>Wheelchair: access needed</p>
                                </div> 

                            </div>
                        </div>

                    </ThankYouWrapper>  
                </div> 
            </div>
            <Testimonial>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="wrapper">
                                    <h4>Lorem Ipsum</h4>
                                    <br />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
                                    </p>
                                </div>    
                            </div>                          
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                            <div className="wrapper">
                                    <h4>Lorem Ipsum</h4>
                                    <br />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
                                    </p>
                                </div>  
                            </div>                          
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="wrapper">
                                    <h4>Lorem Ipsum</h4>
                                    <br />
                                    <p>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.
                                    </p>
                                </div>  
                            </div>                          
                        </div>
                    </div>
                </div>    
            </Testimonial>
        </div>
    )
} 

export default ThankYou

