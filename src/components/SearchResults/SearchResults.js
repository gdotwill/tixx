import React from 'react';

import Filter from './Filter';
import Results from './Results';

const SearchResults = props => {     
    return  (
        <div className="bg-light">
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className="col-md-3"><Filter /></div>
                    <div className="col-md-9"><Results /></div>
                </div>
            </div>
        </div>   
    );
}

export default SearchResults
