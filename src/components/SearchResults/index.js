import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import SearchResults from './SearchResults';

import Footer from '../Footer';

const SearchResultsComponent = (adults) => {   
    return (
        <>
            <Nav 
                adults={adults}
            />
            <Search />
            <SearchResults />
            <Footer />  
        </>
    );
}

export default SearchResultsComponent
