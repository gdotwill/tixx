import React from 'react';

import ButtonsWrapper from './styled/buttons';

const Button = props => {    
    let content = (
        <ButtonsWrapper>
            <div className="row buttons">
                <div className="col-md-4 button active">lite</div>
                <div className="col-md-4 button inActive">medium</div>
                <div className="col-md-4 button inActive">heavy</div>
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
    return content;   
}

export default Button

