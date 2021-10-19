import React from 'react';

import { Link } from 'react-router-dom';

import PaymentWrapper from './styled';

const Payment = () => {    
    return (
        <div className="bg-light pt-5 pb-5">
            <div className="container">
                <PaymentWrapper>
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Payments</h1>
                            <br />

                            <div className="tab">
                                Total to pay £59.75
                            </div>

                            <form className="mt-3 mb-3">
                                <input type="text" placeholder="Title"/><br />
                                <input type="text" placeholder="First Name"/>
                                <input className="ml-4" type="text" placeholder="Last Name"/>
                                <input type="text" placeholder="Mobile"/>
                                <input className="ml-4" type="text" placeholder="Email"/>
                                <input type="text" placeholder="Payment Method"/><br />
                                <input type="text" placeholder="Card"/>

                                <div style={{ marginTop: '30px' }}>
                                    <input type="checkbox" />
                                    <span>I agree about terms & conditions</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span>I agree about terms & conditions</span>
                                </div>
                            </form>

                            <Link to="thank-you">
                                <button>
                                    Book Now
                                </button>
                            </Link>  
                        </div>
                        <div className="col-md-6">
                            <h4>Luxury Tour</h4>
                        </div>
                    </div>   
                </PaymentWrapper>   
            </div>
        </div>
    )
} 

export default Payment

