import React, { useEffect, useState } from 'react';

import qs from "qs";

import { createBrowserHistory } from "history";

import { BiSearch } from 'react-icons/bi';

import SearchBar from './styled';

import { Link } from 'react-router-dom';

import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/airbnb.css";

const Search = props => {

    const [state, setState] = useState({
        destination: false,
        calendar: true,
        duration: false,
        size: false,
        // date: new Date()
    });

    const [adults, setAdults] = useState(0);

    const [children, setChildren] = useState(0);

    const [infants, setInfants] = useState(0);

    const [duration, setDuration] = useState(0);

    const history = createBrowserHistory();

    useEffect(() => {
        const filterParams = history.location.search.substr(1);
        const filtersFromParams = qs.parse(filterParams);
        if (filtersFromParams.adults) {
          setAdults(Number(filtersFromParams.adults));
        //   setDate(Number(filtersFromParams.date));
        }
      }, []);

      useEffect(() => {
        history.push(`?adults=${adults}`);
        // history.push(`?date=${date}`);
      }, [adults]);


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
        const duration = document.querySelector('.duration-size');
        if (duration ) {
            setState({
                duration: true,
            }) 
        }
    }


    const handleSize = () => {
        setState({
            size: true,
        });
    }

    const handleSizeOff = (e) => {
        const dropdown = document.querySelector('.dropdown-size');
        const searchBar = document.querySelector('.search-bar');
        const body = document.querySelector('body');
        if (dropdown) {
            setState({
                size: true,
            }) 
        } 
    }

    const handleDecrementAdults = () => {
        if (adults > 0) {
            setAdults(adults - 1)
        }  
    }
    const handleIncrementAdults = () => setAdults(adults + 1);


    const handleDecrementChildren = () => {
        if (children > 0) {
            setChildren(children - 1)
        }  
    }
    const handleIncrementChildren = () => setChildren(children + 1);


    const handleDecrementInfants = () => {
        if (infants > 0) {
            setInfants(infants - 1)
        }    
    }
    const handleIncrementInfants = () => setInfants(infants + 1);


    const handleDecrementDuration = () => {
        if (duration > 0) {
            setDuration(duration - 1)
        }  
    }
    const handleIncrementDuration = () => { 
        if (duration < 30) {
            setDuration(duration + 1)
        } 
    }
    
    let content = (
        <SearchBar className="pt-3 pb-4">
            <div className="container">
                <div className="row">
                    <div style={{ width: '29%', marginRight: '6px' }}>
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
                    <div style={{ width: '20%', marginRight: '6px'}}>
                        <label>Leaving</label>
                        <div>
                            <Flatpickr
                                minDate="2021-09-01"
                                onChange={date => {
                                    setState({date: date});
                                }}
                                options={
                                    {
                                      minDate: new Date(),
                                    }
                                  }
                            />
                        </div>     
                    </div> 
                    <div style={{ width: '20%', marginRight: '6px'}}>
                        <label>Duration</label>
                        <input 
                            type="text" 
                            onBlur = {handleDurationOff}
                            onFocus = {handleDuration}
                            value={duration}
                        />
                        {
                            state.duration && (
                                <div className="dropdown-duration pt-3 pl-3 pr-3">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <p className="people">Number of days</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="row float-right pr-3">
                                                <img 
                                                    alt="logo" 
                                                    class="dials" 
                                                    src="../../images/minus.png" 
                                                    onClick={handleDecrementDuration}
                                                />                                           
                                                <div class="number">{duration}</div> 
                                                <img 
                                                    alt="logo" 
                                                    class="dials" 
                                                    src="../../images/plus.png" 
                                                    onClick={handleIncrementDuration}
                                                />
                                            </div>
                                        </div> 
                                    </div>  
                                </div>
                            )
                        }
                    </div>
                    <div style={{ width: '20%', marginRight: '6px'}}>
                        <label>Party size</label>
                        <input 
                            type="text" 
                            onBlur = {handleSizeOff}
                            onFocus = {handleSize}
                            value={adults + children + infants }
                        />
                        {
                            state.size && (
                                <>
                                    <div className="dropdown-size pt-3 pl-3 pr-3">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="people">Adults</p>
                                                <p className="age">14 + years</p>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row float-right pr-3">
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/minus.png" 
                                                        onClick={handleDecrementAdults}
                                                    />                                           
                                                    <div class="number">{adults}</div> 
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/plus.png" 
                                                        onClick={handleIncrementAdults}
                                                    />
                                                </div>
                                            </div> 
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="people">Children</p>
                                                <p className="age">2 - 13 years</p>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row float-right pr-3">
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/minus.png" 
                                                        onClick={handleDecrementChildren}
                                                    />                                           
                                                    <div class="number">{children}</div> 
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/plus.png" 
                                                        onClick={handleIncrementChildren}
                                                    />
                                                </div>
                                            </div> 
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="people">Infants</p>
                                                <p className="age">Under 2 years</p>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="row float-right pr-3">
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/minus.png" 
                                                        onClick={handleDecrementInfants}
                                                    />                                           
                                                    <div class="number">{infants}</div> 
                                                    <img 
                                                        alt="logo" 
                                                        class="dials" 
                                                        src="../../images/plus.png" 
                                                        onClick={handleIncrementInfants}
                                                    />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </>
                            )
                        } 
                    </div>
                    <div style={{ width: '8%'}}>
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
