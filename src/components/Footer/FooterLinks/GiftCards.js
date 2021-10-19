import React from 'react';

import Nav from '../../Header/Nav/Nav';

import Search from '../../Header/Search/Search';

import Banner from './styled/banner';

import BundleWrapper from './styled';

import Footer from '../../Footer';

const GiftCards = () => {    
    return (
        <>
            <Nav />
            <Search />
            <Banner>
                <div className="container">
                    <h1 className="padTop-50">Gift Cards</h1>   
                </div>  
            </Banner>
            <BundleWrapper className="bg-white">
                <div className="row bg-light pt-5 pb-5">
                    <div className="container">
                        <div className="col-md-12">
                            <h1 className="mt-3 mb-4">Gift Cards</h1>
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
            <Footer />      
        </>
    )
} 

export default GiftCards


