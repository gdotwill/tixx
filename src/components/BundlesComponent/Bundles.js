import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Banner from './styled/banner';

import BundleWrapper from './styled/';

import { BsStarFill } from 'react-icons/bs';

import { RiShoppingCart2Line } from 'react-icons/ri';

import { BiShareAlt } from 'react-icons/bi';

import Flatpickr from "react-flatpickr";

import { RiArrowRightSLine } from 'react-icons/ri';

const Bundle = () => {  
    const [date, setDate] = useState(new Date());
    
    const [form, setForm] = useState();


    const handleForm = () => {
        setForm(!form);
    }

    return (
        <>
            <Banner>
                <div className="container">
                    <h1 className="padTop-50">Luxury tour</h1>   
                </div>  
            </Banner>
            <BundleWrapper className="bg-light pb-5">
                <div className="container pt-4">
                    <div className="tabs mb-4">
                        <div className="tab active">
                            Overview
                        </div>
                        <div className="tab ml-4">
                            FAQs
                        </div>
                        <div className="tab ml-4">
                            Reviews
                        </div>
                        <div className="tab ml-4">
                            Cancellation policy
                        </div>  
                    </div>

                    <div className="row">
                        <div className="col-md-8 bg-white pad-20">

                            <div className="pt-3 overview">
                                <h3>Overview</h3>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <div className="bundle-img-step">
                                        <img alt="icon_map" class="icon_map" src="../../images/bundles/bundle.png" />
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <h1> 1 </h1>
                                </div> 
                                <div className="col-md-7">
                                    <h3>Amsterdam North Canal Cruise</h3>
                                    <p className="bundle-info">
                                        Amsterdam North (?Noord? in Dutch) is the new hotspot of Amsterdam. 
                                        The spot has a more modern feel to it, but is still capturing the atmosphere of the city center. 
                                        Locals have discovered it?s creative energy, but it?s also becoming more and more popular among people visiting Amsterdam.
                                    </p>
                            
                                    <Flatpickr
                                        onChange={date => {
                                            setDate({date: date});
                                        }}
                                        placeholder="DD/MM/YY"
                                        options={
                                            {
                                                minDate: new Date(),
                                                dateFormat: "d-m-Y"
                                            }
                                        }      
                                    />

                                    <div className="check">
                                        <RiArrowRightSLine  style={{ height: '30px', width: '30px', color: '#fff', marginTop: '-6px' }} /> 
                                        <RiArrowRightSLine  style={{ height: '30px', width: '30px', color: '#fff', marginLeft: '-20px', marginTop: '-5px' }} /> 
                                        Check availabilty
                                    </div>

                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="bundle-img-step">
                                        <img alt="icon_map" class="icon_map" src="../../images/bundles/bundle.png" />
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <h1> 2 </h1>
                                </div> 
                                <div className="col-md-7">
                                    <h3>Private Zaan windmill 3-course dinner cruise from Amsterdam</h3>
                                    <p className="bundle-info">
                                        Embark on a unique culinary and sightseeing 
                                        experience with a private dinner cruise along the Zaan River. Glide past windmills while a knowledgeable 
                                        skipper and guide shares stories of life on the river and among the surrounding landscape.
                                    </p>
                            
                                    <Flatpickr
                                        onChange={date => {
                                            setDate({date: date});
                                        }}
                                        placeholder="DD/MM/YY"
                                        options={
                                            {
                                                minDate: new Date(),
                                                dateFormat: "d-m-Y"
                                            }
                                        }
                                        
                                    />

                                    <div 
                                        className="check"
                                        onClick={handleForm}
                                    >
                                        <RiArrowRightSLine  style={{ height: '30px', width: '30px', color: '#fff', marginTop: '-6px' }} /> 
                                        <RiArrowRightSLine  style={{ height: '30px', width: '30px', color: '#fff', marginLeft: '-20px', marginTop: '-5px' }} /> 
                                        Check availabilty
                                    </div>

                                </div>
                            </div>

                            {
                                form && (

                                    <div className="form mt-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> Time: </label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-md-6">
                                                <label> Passengers: </label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <label> Email Address: </label>
                                                <input type="text" />
                                            </div>
                                            <div className="col-md-6">
                                                <label> Phone Number: </label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <label> Passenger Names: </label>
                                                <textarea />
                                            </div>
                                        </div>

                                    </div>

                                )
                            }


                            
                            <div className="row pad-20 mt-5">
                                <h3>FAQs</h3>
                            </div>

                            <div className="row pad-20">
                                <h3>Reviews</h3>
                            </div>

                            <div className="row pad-20">
                                <h3>Cancelation Policy</h3>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="bg-white pad-20">
                                
                                <div className="right">
                                    <h3>
                                        £129.10
                                    </h3>
                                    <p>per person</p>
                                </div>
                                <div className="review-wrapper">
                                    <BsStarFill className="star-full" />
                                    <BsStarFill className="star-full" />
                                    <BsStarFill className="star-full" />
                                    <BsStarFill className="star-full" />
                                    <BsStarFill className="star-empty" />
                                    <span className="review">25 Reviews</span>
                                </div>
                                <Link to="payment">
                                    <button className="btn-book mt-4">
                                        <RiShoppingCart2Line className="book-icon" /> Book
                                    </button>
                                </Link>
                                <div className="share-wrapper">
                                    <button className="btn-share mt-1">
                                        <BiShareAlt className="share-icon" /> Shar this!
                                    </button>
                                </div>  
                            </div>
                        </div>
                    </div> 
                </div> 
            </BundleWrapper>        
        </>
    )
} 

export default Bundle

