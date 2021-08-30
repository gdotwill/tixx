import React from 'react';

import { BiCart } from 'react-icons/bi';

import NavLinks from './styled'

const Nav = props => {
    let content = (
        <NavLinks className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-left">
                        <img alt="logo" class="logo" src="../../images/tixxly_logo.png" />
                    </div>
                    <div className="col-md-5 text-right">
                        <ul>
                            <li>Our Story</li> 
                            <li>Destinations</li> 
                            <li>Experiences</li> 
                        </ul>  
                    </div> 
                    <div className="col-md-3 text-right">
                        <button>
                            Sign in / Sign up
                        </button>
                        <BiCart style={{ color: 'white', width: '40px', height: '40px', marginLeft: '10px' }} />
                    </div>
                </div>
            </div> 
        </NavLinks>
    );
    return content;
}

export default Nav
