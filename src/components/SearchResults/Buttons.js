import React, { useState } from 'react';

import ButtonsWrapper from './styled/buttons';

const Button = props => { 
    
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
    )
}

export default Button

