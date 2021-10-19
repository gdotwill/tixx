import React from 'react';

import Nav from '../Header/Nav/Nav';

import Search from '../Header/Search/Search';

import Footer from '../Footer';

const Destinations = props => {    
    return (
        <>
            <Nav />
            <Search />
            <div className="container">
                <h1>Destinations</h1>
            </div>
            <Footer />      
        </>
    ) 
} 

export default Destinations


