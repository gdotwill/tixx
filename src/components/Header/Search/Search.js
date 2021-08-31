import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import SearchBar from './styled';

import { Link } from 'react-router-dom';

const Search = props => {

    const [state, setState] = useState({
        destination: false,
        calendar: false,
        duration: false,
        size: false
    })

    const handleDestination = () => {
        setState({
            destination: true,
        });
    }

    const handleDestinationOff = () => {
        setState({
            destination: false,
        });
    }


    const handleCalendar = () => {
        setState({
            calendar: true,
        });
    }

    const handleCalendarOff = () => {
        setState({
            calendar: false,
        });
    }


    const handleDuration = () => {
        setState({
            duration: true,
        });
    }

    const handleDurationOff = () => {
        setState({
            duration: false,
        });
    }


    const handleSize = () => {
        setState({
            size: true,
        });
    }

    const handleSizeOff = () => {
        setState({
            size: false,
        });
    }
    
    let content = (
        <SearchBar className="pt-3 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <label>Destination/Experience</label>
                        <input 
                            type="text" 
                            onBlur = {handleDestinationOff}
                            onFocus = {handleDestination}
                        />
                        {
                            state.destination && (
                                <div className="dropdown">
                                    <h2>Top destinatons</h2>
                                    <div className="dropdown-list">
                                        <ul >
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                            <li>lorem</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }    
                    </div>
                    <div className="col-md-2">
                        <label>Leaving</label>
                        <input 
                            type="text" 
                            onBlur = {handleCalendarOff}
                            onFocus = {handleCalendar}
                        />

                        {
                            state.calendar && (
                                <div className="dropdown-calendar">
            
                                </div>
                            )
                        }    
                    </div> 
                    <div className="col-md-2">
                        <label>Duration</label>
                        <input 
                            type="text" 
                            onBlur = {handleDurationOff}
                            onFocus = {handleDuration}
                        />
                        {
                            state.duration && (
                                <div className="dropdown-duration">
            
                                </div>
                            )
                        }  
                    </div>
                    <div className="col-md-2">
                        <label>Party size</label>
                        <input 
                            type="text" 
                            onBlur = {handleSizeOff}
                            onFocus = {handleSize}
                        />
                        {
                            state.size && (
                                <div className="dropdown-duration">
            
                                </div>
                            )
                        } 
                    </div>
                    <div className="col-md-1">
                        <label>&nbsp;</label>
                        <Link to="/search-results">
                            <button>
                                <BiSearch style={{ color: '#fff', width: '25px', height: '25px'}} />
                            </button>
                        </Link>  
                    </div>
                </div>
            </div>
        </SearchBar>
    ) 
    return content;  
} 

export default Search
