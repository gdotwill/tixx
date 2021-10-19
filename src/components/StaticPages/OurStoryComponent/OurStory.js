import React from 'react';

import { Link } from 'react-router-dom';

import Banner from './styled/banner';

import BundleWrapper from './styled';

import { BsStarFill } from 'react-icons/bs';

import { RiShoppingCart2Line } from 'react-icons/ri';

import { BiShareAlt } from 'react-icons/bi';

const OurStory = () => {    
    return (
        <>
            <Banner>
                <div className="container">
                    <h1 className="padTop-50">Our Story</h1>   
                </div>  
            </Banner>
            <BundleWrapper className="bg-white">
                <div className="container pt-4 pb-5">
                    <h1 className="mt-4">How Tixxly Works</h1>

                    <div className="row mt-5">
                        <div className="col-md-4 center">
                            <div className="imgCircle">
                                <img alt="icon_map" class="icon_map" src="../../images/about/map_icon.png" />   
                            </div>
                            <h4 className="mt-4">Destination/Experience</h4>
                            <p className="mt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's
                            </p>
                        </div>
                        <div className="col-md-4 center">
                            <div className="imgCircle">
                                <img alt="icon_map" class="icon_map" src="../../images/about/location_icon.png" />   
                            </div>
                            <h4 className="mt-4">Curated Experiences</h4>
                            <p className="mt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's
                            </p>
                        </div>
                        <div className="col-md-4 center">
                            <div className="imgCircle">
                                <img alt="icon_map" class="icon_map" src="../../images/about/book_icon.png" />   
                            </div>
                            <h4 className="mt-4">Curated Experiences</h4>
                            <p className="mt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row bg-light pt-5 pb-5">
                    <div className="container">
                        <div className="col-md-12">
                            <h1 className="mt-3 mb-4">Who we are</h1>
                            <p >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            </p>
                            <p className="mt-3 mb-4">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                            </p>
                            <br />
                            <hr />
                        </div> 
                        <br />
                        <div className="col-md-12">
                            <h1 className="mt-3 mb-4">Our Story</h1>
                            <p >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            </p>
                            <p className="mt-3 mb-4">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                            </p>
                            <br />
                        </div> 
                    </div>    
                </div> 

                <div className="bg-light pb-5">
                    <div className="container pt-3">
                        <div className="row">

                            <div className="col">
                                <div className="featured-trips" 
                                    style={{ 
                                    backgroundImage: "url(../../images/amsterdam.jpg)",
                                    backgroundSize: "cover",
                                    height:"400px",
                                    borderRadius: "10px"
                                }}>
                                    <div className="featured-trips-info">
                                        <h4>Amsterdam</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="featured-trips" 
                                    style={{ 
                                    backgroundImage: "url(../../images/athens.jpg)",
                                    backgroundSize: "cover",
                                    height:"400px",
                                    borderRadius: "10px"
                                }}>
                                    <div className="featured-trips-info">
                                        <h4>Athens</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="featured-trips" 
                                    style={{ 
                                    backgroundImage: "url(../../images/barcelona.jpg)",
                                    backgroundSize: "cover",
                                    height:"400px",
                                    borderRadius: "10px"
                                }}>
                                    <div className="featured-trips-info">
                                        <h4>Barcelona</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="featured-trips" 
                                    style={{ 
                                    backgroundImage: "url(../../images/rome.jpg)",
                                    backgroundSize: "cover",
                                    height:"400px",
                                    borderRadius: "10px"
                                }}>
                                    <div className="featured-trips-info">
                                        <h4>Florence</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="featured-trips" 
                                    style={{ 
                                    backgroundImage: "url(../../images/newyork.jpg)",
                                    backgroundSize: "cover",
                                    height:"400px",
                                    borderRadius: "10px"
                                }}>
                                    <div className="featured-trips-info">
                                        <h4>New York</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <br />

                </div>

            </BundleWrapper>        
        </>
    )
} 

export default OurStory

