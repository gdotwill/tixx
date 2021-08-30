import React from 'react';

import FilterWrapper from './styled/filter';

const Filter = props => {    
    let content = (
        <>      
            <FilterWrapper>
                <h4>Category</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" /> 
                        <span>Guided tour</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Private tour</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Entry ticket</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Cruise</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Live music</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Sport</span>
                    </li>
                </ul> 
            </FilterWrapper>

            <FilterWrapper className="mt-3">
                <h4>Service</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" /> 
                        <span>Small group</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Skip the line</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Private tour</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Wheelchair accessible</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Hotel pickup possible</span>
                    </li>
                </ul> 
            </FilterWrapper>
            
            <FilterWrapper className="mt-3">
                <h4>Price</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" /> 
                        <span>Less than £100</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Between £100-200</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>Between £300-400</span>
                    </li>
                    <li>
                        <input type="checkbox" /> 
                        <span>More than £400</span>
                    </li>
                </ul> 
            </FilterWrapper>
        </>
    )
    return content;   
}

export default Filter
