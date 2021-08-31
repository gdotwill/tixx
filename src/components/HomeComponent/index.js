import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import Home from './Home';

import Footer from '../Footer';

const HomeComponent = props => {   
    let content = (
        <>
            <Nav />
            <Search />
            <Home />
            <Footer />  
        </>
    );

    return content;
}

export default HomeComponent
