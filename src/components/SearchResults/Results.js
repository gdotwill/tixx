import React from 'react';

import Buttons from './Buttons';

import ResultWrapper from './styled/results';

const Results = props => {    
    let content = (
        <>
            <Buttons />
            <ResultWrapper>
                <div className="row">
                    <div className="col-md-4 pad-0">
                        <div className="featured-trips" 
                            style={{ 
                            backgroundImage: "url(../../images/amsterdam.jpg)",
                            backgroundSize: "cover",
                            height:"350px",
                            borderRadius: "10px"
                        }}></div>
                    </div>
                    <div className="col-md-8 pt-4"> 
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <p className="top-pick">TOP PICKS</p>
                                </div>
                                <div className="row result">
                                    <div className="col-md-2">
                                        <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Amsterdam North Canal Cruise</p>
                                    </div>
                                </div> 
                                <div className="row result">
                                    <div className="col-md-2">
                                        <img alt="icon_beach" class="icon_beach" src="../../images/listing/blue.svg" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                    </div>
                                </div>  
                                <div className="row result">
                                    <div className="col-md-2">
                                        <img alt="icon_beach" class="icon_beach" src="../../images/listing/red.svg" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Amsterdam North Canal Cruise</p>
                                    </div>
                                </div>  
                                <div className="row result">
                                    <div className="col-md-2">
                                        <img alt="icon_beach" class="icon_beach" src="../../images/listing/yellow.svg" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Private Zaan windmill 3-course dinner cruise from Amsterdam</p>
                                    </div>
                                </div> 
                                <div className="row result">
                                    <div className="col-md-2">
                                        <img alt="icon_beach" class="icon_beach" src="../../images/listing/green.svg" /> 
                                    </div>
                                    <div className="col-md-10">
                                        <p>Amsterdam North Canal Cruise</p>
                                    </div>
                                </div>   
                            </div>
                            <div className="col-md-4">
                                <h3 className="float-right">
                                    £129.10
                                </h3>

                            </div>
                        </div>
                    </div>
                </div>
            </ResultWrapper>
        </>
    )
    return content;   
} 

export default Results

