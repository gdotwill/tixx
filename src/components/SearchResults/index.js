import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import SearchResults from './SearchResults';

import Footer from '../Footer';

const SearchResultsComponent = props => {   
    let content = (
        <>
            <Nav />
            <Search />
            <SearchResults />
            <Footer />  
        </>
    );

    return content;
}

export default SearchResultsComponent
