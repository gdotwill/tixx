import React from 'react';

import Filter from './Filter';
import Results from './Results';

const SearchResults = props => {     
    let content =  (
        <div style={{ background: "#f6f6f6" }}>
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className="col-md-4"><Filter /></div>
                    <div className="col-md-8"><Results /></div>
                </div>
            </div>
        </div>   
    );
    return content ;  
}

export default SearchResults
