import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import Home from './Home';

import Footer from '../Footer';

const HomeComponent = props => {   
    return (
        <>
            <Nav />
            <Search />
            <Home />
            <Footer />  
        </>
    );
}

export default HomeComponent
