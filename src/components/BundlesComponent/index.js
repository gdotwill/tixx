import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import Footer from '../Footer';

import Bundles from './Bundles';

const BundlesComponent = props => {    
    return (
        <>
            <Nav />
            <Search />
            <Bundles />
            <Footer />      
        </>
    )
       
} 

export default BundlesComponent

