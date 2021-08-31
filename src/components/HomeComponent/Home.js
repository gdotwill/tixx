import React from 'react';

import Banner from './styled/banner';

import Featured from './styled/featured';

const Home = props => {   
    let content = (
        <>
            <Banner className="mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header text-left">
                            <h1>Experience as much </h1>
                            <h1>or as little as you like, </h1>
                            <h1>you decide</h1>
                        </div>
                    </div>
                </div>
            </Banner>

        
            <div className="container mt-5 pt-2">
                <div className="row">

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="icon_map" class="icon_map" src="../../images/Icon_Map.svg" />
                            </div>
                            <div className="col-md-10">
                                <h5>Destination/Experience</h5>
                                <p>Simple & easy to use, just tell us where you’re going and how long for</p>
                            </div>
                        </div>   
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="icon_location" class="icon_location" src="../../images/Icon_Location.svg" />   
                            </div>
                            <div className="col-md-10">
                                <h5>Curated experiences</h5>
                                <p>We’ve taken the stress out of deciding by curating Tixxly results for you</p>
                            </div>
                        </div>   
                    </div>


                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="icon_beach" class="icon_beach" src="../../images/Icon_Beach.svg" />    
                            </div>
                            <div className="col-md-10" style={{ paddingLeft: "30px" }}>
                                <h5>Book</h5>
                                <p>Once you’ve decided which package you want, it’s safe and secure to book</p>
                            </div>
                        </div>   
                    </div>

                </div>
            </div>


            <Featured className="mt-5 pt-4">
                <div className="container pt-5">
                    <h1>Featured trips</h1>
                    <br />
                    <div className="row">

                        <div className="col-md-6">
                            <div className="featured-trips" 
                                style={{ 
                                backgroundImage: "url(../../images/amsterdam.jpg)",
                                backgroundSize: "cover",
                                height:"400px",
                                borderRadius: "10px"
                            }}>
                                <div className="featured-trips-info">
                                    <h4>Destination/Experience</h4>
                                    <h5>From £29</h5> 
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="featured-trips" 
                                style={{ 
                                backgroundImage: "url(../../images/barcelona.jpg)",
                                backgroundSize: "cover",
                                height:"400px",
                                borderRadius: "10px"
                            }}>
                                <div className="featured-trips-info">
                                    <h4>Destination/Experience</h4>
                                    <h5>From £29</h5> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div> 

                <br /> 

                <div className="container pt-5 pt-5" style={{ paddingBottom: "40px"}}>
                    <h1>Top destinations</h1>
                    <br />
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
                                    <h5>From £29</h5> 
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
                                    <h5>From £29</h5> 
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
                                    <h5>From £29</h5> 
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
                                    <h5>From £29</h5> 
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
                                    <h5>From £29</h5> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </Featured>
        </>
    );

    return content;
}

export default Home
