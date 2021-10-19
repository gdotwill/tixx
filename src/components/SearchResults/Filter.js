import React from 'react';

import FilterWrapper from './styled/filter';

const Filter = () => {    
    return (
        <>      
            <FilterWrapper>
                <h4>Category</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" value="guided" name="category" /> 
                        <span>Guided tour</span>
                    </li>
                    <li>
                        <input type="checkbox" value="private" name="category" /> 
                        <span>Private tour</span>
                    </li>
                    <li>
                        <input type="checkbox" value="entry" name="category" /> 
                        <span>Entry ticket</span>
                    </li>
                    <li>
                        <input type="checkbox" value="cruise" name="category" /> 
                        <span>Cruise</span>
                    </li>
                    <li>
                        <input type="checkbox" value="music" name="category" /> 
                        <span>Live music</span>
                    </li>
                    <li>
                        <input type="checkbox" value="sport" name="category" /> 
                        <span>Sport</span>
                    </li>
                </ul> 
            </FilterWrapper>

            <FilterWrapper className="mt-3">
                <h4>Service</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" value="small" name="service" /> 
                        <span>Small group</span>
                    </li>
                    <li>
                        <input type="checkbox" value="skip" name="service" /> 
                        <span>Skip the line</span>
                    </li>
                    <li>
                        <input type="checkbox" value="private_tour" name="service" /> 
                        <span>Private tour</span>
                    </li>
                    <li>
                        <input type="checkbox" value="wheelchair" name="service" /> 
                        <span>Wheelchair accessible</span>
                    </li>
                    <li>
                        <input type="checkbox" value="hotel" name="service" /> 
                        <span>Hotel pickup possible</span>
                    </li>
                </ul> 
            </FilterWrapper>
            
            <FilterWrapper className="mt-3">
                <h4>Price</h4> 
                <ul className="mt-4">
                    <li>
                        <input type="checkbox" value="100" name="price" /> 
                        <span>Less than £100</span>
                    </li>
                    <li>
                        <input type="checkbox" value="100-200" name="price" /> 
                        <span>Between £100-200</span>
                    </li>
                    <li>
                        <input type="checkbox" value="300-400" name="price" /> 
                        <span>Between £300-400</span>
                    </li>
                    <li>
                        <input type="checkbox" value="400" name="price" /> 
                        <span>More than £400</span>
                    </li>
                </ul> 
            </FilterWrapper>
        </>
    )
}

export default Filter
