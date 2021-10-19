import React, { useState } from 'react';

import ButtonsWrapper from './styled/buttons';

import ResultWrapper from './styled/results';

import { BsStarFill } from 'react-icons/bs';

import { BiShareAlt } from 'react-icons/bi';

import { RiShoppingCart2Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const Results = (lite) => { 

    const [state, setState] = useState({
        lite: true,
        medium: false,
        heavy: false,
    });

    const handleLite = () => {
        setState({
            lite: true,
            medium: false,
            heavy: false
        })  
    }

    const handleMedium = () => {
        setState({
            lite: false,
            medium: true,
            heavy: false
        })   
    }

    const handleHeavy = () => {
        setState({
            lite: false,
            medium: false,
            heavy: true
        })   
    } 

    return (
        <>
            <ButtonsWrapper>
                <div className="row buttons">
                    <div 
                        className="col-md-4 button"
                        id={state.lite ? 'active' : 'inActive'}
                        onClick={handleLite}
                    >
                        lite
                    </div>

                    <div 
                        className="col-md-4 button"
                        id={state.medium ? 'active' : 'inActive'}
                        onClick={handleMedium}
                    >
                            medium
                    </div>

                    <div 
                        className="col-md-4 button"
                        id={state.heavy ? 'active' : 'inActive'}
                        onClick={handleHeavy}
                    >   
                        heavy
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 pad-0">
                        <p className="float-left">23 experiences found</p>
                    </div>
                    <div className="col-md-6 pad-0">
                        <p className="float-right">Sort by: Price highest</p>
                    </div>    
                </div>
            </ButtonsWrapper>
            
            {
                state.lite && (
                    <>
                        <ResultWrapper>
                            <div className="row">
                                <div className="col-md-3 pad-0">
                                    <div className="featured-trips" 
                                        style={{ backgroundImage: 'url(../../images/amsterdam.jpg)' }}>
                                    </div>
                                </div>
                                <div className="col-md-9 pt-4"> 
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="mb-4">
                                                <p className="top-pick">TOP PICKS</p>
                                            </div>
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-md-5 bg-white">
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
                                            <Link to ="bundles">
                                                <button className="btn-book mt-4">
                                                    <RiShoppingCart2Line className="book-icon" /> Book
                                                </button>
                                            </Link>
                                            <div className="share-wrapper">
                                                <BiShareAlt className="share-icon" /> <span className="share">Share this!</span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ResultWrapper>

                        <ResultWrapper>
                            <div className="row mt-4">
                                <div className="col-md-3 pad-0">
                                    <div className="featured-trips" 
                                        style={{ backgroundImage: 'url(../../images/amsterdam.jpg)' }}>
                                    </div>
                                </div>
                                <div className="col-md-9 pt-4"> 
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="mb-4">
                                                <p className="top-pick">TOP PICKS</p>
                                            </div>
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-md-5 bg-white">
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
                                            <Link to ="bundles">
                                                <button className="btn-book mt-4">
                                                    <RiShoppingCart2Line className="book-icon" /> Book
                                                </button>
                                            </Link>
                                            <div className="share-wrapper">
                                                <BiShareAlt className="share-icon" /> <span className="share">Share this!</span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ResultWrapper>

                        <ResultWrapper>
                            <div className="row mt-4">
                                <div className="col-md-3 pad-0">
                                    <div className="featured-trips" 
                                        style={{ backgroundImage: 'url(../../images/amsterdam.jpg)' }}>
                                    </div>
                                </div>
                                <div className="col-md-9 pt-4"> 
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="mb-4">
                                                <p className="top-pick">TOP PICKS</p>
                                            </div>
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>  
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                                </div>
                                            </div> 
                                            <div className="row result">
                                                <div className="col-md-1">
                                                    <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                                </div>
                                                <div className="col-md-11">
                                                    <p>Amsterdam North Canal Cruise</p>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="col-md-5 bg-white">
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
                                            <Link to ="bundles">
                                                <button className="btn-book mt-4">
                                                    <RiShoppingCart2Line className="book-icon" /> Book
                                                </button>
                                            </Link>
                                            <div className="share-wrapper">
                                                <BiShareAlt className="share-icon" /> <span className="share">Share this!</span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ResultWrapper>
                    </>   
                )
            }

            {
                state.medium && (
                    <ResultWrapper>
                        <div className="row mt-4">
                            <div className="col-md-3 pad-0">
                                <div className="featured-trips" 
                                    style={{ backgroundImage: 'url(../../images/amsterdam.jpg)' }}>
                                </div>
                            </div>
                            <div className="col-md-9 pt-4"> 
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="mb-4">
                                            <p className="top-pick">TOP PICKS</p>
                                        </div>
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div> 
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                            </div>
                                        </div>  
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div>  
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                            </div>
                                        </div> 
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="col-md-5 bg-white">
                                        <div className="right">
                                            <h3>
                                                £150.10
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
                                        <Link to ="bundles">
                                            <button className="btn-book mt-4">
                                                <RiShoppingCart2Line className="book-icon" /> Book
                                            </button>
                                        </Link>
                                        <div className="share-wrapper">
                                            <BiShareAlt className="share-icon" /> <span className="share">Share this!</span>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ResultWrapper>   
                )
            }

            {
                state.heavy && (
                    <ResultWrapper>
                        <div className="row mt-4">
                            <div className="col-md-3 pad-0">
                                <div className="featured-trips" 
                                    style={{ backgroundImage: 'url(../../images/amsterdam.jpg)' }}>
                                </div>
                            </div>
                            <div className="col-md-9 pt-4"> 
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="mb-4">
                                            <p className="top-pick">TOP PICKS</p>
                                        </div>
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div> 
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                            </div>
                                        </div>  
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div>  
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                            </div>
                                        </div> 
                                        <div className="row result">
                                            <div className="col-md-1">
                                                <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                            </div>
                                            <div className="col-md-11">
                                                <p>Amsterdam North Canal Cruise</p>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="col-md-5 bg-white">
                                        <div className="right">
                                            <h3>
                                                £250.10
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
                                        <Link to ="bundles">
                                            <button className="btn-book mt-4">
                                                <RiShoppingCart2Line className="book-icon" /> Book
                                            </button>
                                        </Link>
                                        <div className="share-wrapper">
                                            <BiShareAlt className="share-icon" /> <span className="share">Share this!</span>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ResultWrapper>
                )
            }
            
        </>
    )
} 

export default Results

