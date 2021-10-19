import React from 'react';

// import { RiShoppingCart2Line } from 'react-icons/ri';

import NavLinks from './styled';

import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <NavLinks className="pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-left">
                        <Link to="/">
                            <img alt="logo" class="logo" src="../../images/tixxly_logo.png" />
                        </Link>  
                    </div>
                    <div className="col-md-8 text-right">
                        <ul>
                            <li>
                                <Link to="our-story">
                                    Our Story
                                </Link>
                            </li>                             
                            <li>
                                <Link to="bundles">
                                    Destinations
                                </Link>
                            </li> 
                            <li>
                                <Link to="experiences">
                                    Experiences
                                </Link>
                            </li> 
                        </ul>  
                    </div> 
                    {/* <div className="col-md-3 text-right">
                        <button>
                            Sign in / Sign up
                        </button>
                        <RiShoppingCart2Line style={{ color: 'white', width: '40px', height: '40px', marginLeft: '10px' }} />
                    </div> */}
                </div>
            </div> 
        </NavLinks>
    );
}

export default Nav
