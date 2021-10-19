import React from 'react';

import Nav from '../Header/Nav/Nav';

import Footer from '../Footer';

import ThankYou from './ThankYou';

const ThankYouComponent = () => {    
    let content = (
        <>
            <Nav />
            <ThankYou />   
            <Footer />     
        </>
    )
    return content;   
} 

export default ThankYouComponent

