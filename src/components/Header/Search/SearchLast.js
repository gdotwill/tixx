// import React, { useEffect, useState } from 'react';

// import { BiSearch } from 'react-icons/bi';

// import SearchBar from './styled';

// import { Link } from 'react-router-dom';

// import Flatpickr from "react-flatpickr";

// import "flatpickr/dist/themes/airbnb.css";

// import axios from "axios";

// const randomUserURL = "https://randomuser.me/api/";

// const Search = () => {

//     const [state, setState] = useState({
//         destination: false,
//         calendar: true,
//         duration: false,
//         size: false,
//         // date: new Date()
//     });

//     const [adults, setAdults] = useState(0);

//     const [children, setChildren] = useState(0);

//     const [infants, setInfants] = useState(0);

//     const [duration, setDuration] = useState(0);

//     const [date, setDate] = useState(new Date());

    
//     const [error, setError] = useState(null);

   



//     useEffect(() => {
//         setAdults(JSON.parse(window.localStorage.getItem('adults')));
//         setDuration(JSON.parse(window.localStorage.getItem('duration')));
//         // setState(JSON.parse(window.localStorage.getItem('date')));
//     }, []);






//     useEffect(() => {
//         window.localStorage.setItem('adults', adults);
//         window.localStorage.setItem('duration', duration);
//         window.localStorage.setItem('date', date);
//     }, [adults, duration, date]);




//     const [data, setData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
        
//             fetch("https://randomuser.me/api/?results=5")
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 setData(data);

//             })
//             .catch((error) => {
//                 setError(error);

//             });
//         }
//         fetchData();
//     }, []);


//     const [dogImage, setDogImage] = useState(null);

//     useEffect(() => {
//         fetch("https://dog.ceo/api/breeds/image/random/5")
//         .then(response => response.json())
//         .then(data => setDogImage(data.message))
//     },[])





//     const handleDestination = () => {
//         setState({
//             destination: true,
//         });
//     }

//     const handleDestinationOff = () => {
//         setState({
//             destination: false,
//         });
//     }


//     const handleCalendar = () => {
//         setState({
//             calendar: true,
//         });
//     }

//     const handleCalendarOff = () => {
//         setState({
//             calendar: false,
//         });
//     }


//     const handleDuration = () => {
//         setState({
//             duration: true,
//         });
//     }

//     const handleDurationOff = () => {
//         const duration = document.querySelector('.duration-size');
//         if (duration ) {
//             setState({
//                 duration: true,
//             }) 
//         }
//     }


//     const handleSize = () => {
//         setState({
//             size: true,
//         });
//     }

//     const handleSizeOff = (e) => {
//         const dropdown = document.querySelector('.dropdown-size');
//         const searchBar = document.querySelector('.search-bar');
//         const body = document.querySelector('body');
//         if (dropdown) {
//             setState({
//                 size: true,
//             }) 
//         } 
//     }

//     const handleDecrementAdults = () => {
//         if (adults > 0) {
//             setAdults(adults - 1)
//         }  
//     }
//     const handleIncrementAdults = () => setAdults(adults + 1);


//     const handleDecrementChildren = () => {
//         if (children > 0) {
//             setChildren(children - 1)
//         }  
//     }
//     const handleIncrementChildren = () => setChildren(children + 1);


//     const handleDecrementInfants = () => {
//         if (infants > 0) {
//             setInfants(infants - 1)
//         }    
//     }
//     const handleIncrementInfants = () => setInfants(infants + 1);


//     const handleDecrementDuration = () => {
//         if (duration > 0) {
//             setDuration(duration - 1)
//         }  
//     }
//     const handleIncrementDuration = () => { 
//         if (duration < 30) {
//             setDuration(duration + 1)
//         } 
//     }

//     const handleDeleteDestination = () => {
       
//     }

//     const [user, setUser] = useState("");
//     const [info, setInfo] = useState([]);

//     const fetchData = async () => {
//         const data = await axios.get("https://randomuser.me/api/?results=5");
//         return data;
//     };

//     useEffect(() => {
//         fetchData().then((res) => {
//         setUser(res);
//         setInfo(res.data.results);
//         });
//     }, []);

//     const getName = (user) => {
//         const { state, country } = user.location;
//         return `${state} - ${country}`;
//     };

   

//     let content = (
//         <SearchBar className="pt-4 pb-4">
//             <div className="container">
//                 <div className="row" style={{ paddingLeft: '40px' }}>

//                     <div style={{ width: '27%', marginRight: '40px' }}>
//                         <div className="row">
//                             <label>Destination/Experience</label>
//                         </div>

//                         <div className="row">
//                             <span style={{ width: '92%' }}>
//                                 <input 
//                                     type="text" 
//                                     onBlur = {handleDestinationOff}
//                                     onFocus = {handleDestination}
//                                 />
//                             </span>
//                             <span
//                                 style={{ width: '8%' }} 
//                                 className="close-destination" 
//                                 onClick={handleDeleteDestination()}
//                             > 
//                                 X   
//                             </span>
//                         </div>

//                         <div className="row">
//                             <span style={{ width: '100%' }} >
                        
//                                 {
//                                     state.destination && (
//                                         <div className="dropdown">
//                                             <h2>Top destinatons</h2>
//                                             <div className="dropdown-list">
//                                                 <ul>
//                                                     {data.map(data => <li>{data.results.name.first}</li>) }

//                                                     {data.map((data, id) => {
//                                                         return <li key={id}>{data.results.name.first}</li>;
//                                                     })}

//                                                     {dogImage.map((dog) => 
//                                                         <li>
//                                                             <img width={"200px"} height={"200px"} src={dog}></img>
//                                                         </li>)
//                                                     }
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     )
//                                 }    
//                             </span>
//                         </div>
//                     </div>

//                     <div style={{ width: '17%', marginRight: '40px' }}>
//                         <div className="row">
//                             <label>Leaving</label>
//                         </div>

//                         <div className="row">
//                             <span style={{ width: '90%' }}>
//                                 <Flatpickr
//                                     onChange={date => {
//                                         setDate({date: date});
//                                     }}
//                                     options={
//                                         {
//                                         minDate: new Date(),
//                                         }
//                                     }
//                                 />
//                             </span>
//                             <span
//                                 style={{ width: '10%' }} 
//                                 className="close-destination" 
//                                 onClick={handleDeleteDestination()}
//                             > 
//                                 X   
//                             </span>
//                         </div>
//                     </div>

//                     <div style={{ width: '17%', marginRight: '40px' }}>
//                         <div className="row">
//                             <label>Duration</label>
//                         </div>
//                         <div className="row">
//                             <span style={{ width: '90%' }}>
//                                 <input 
//                                 type="text" 
//                                 onBlur = {handleDurationOff}
//                                 onFocus = {handleDuration}
//                                 value={duration + ` days`}
//                                 />
//                             </span>
//                             <span
//                                 style={{ width: '10%' }} 
//                                 className="close-destination" 
//                                 onClick={handleDeleteDestination()}
//                             > 
//                                 X   
//                             </span>
//                         </div>
//                         <div className="row">
//                             <span style={{ width: '100%' }} >
                        
//                                 {
//                                     state.duration && (
//                                         <div className="dropdown-duration pt-3 pl-3 pr-3">
//                                             <div className="row">
//                                                 <div className="col-md-7">
//                                                     <p className="people">Number of days</p>
//                                                 </div>
//                                                 <div className="col-md-5">
//                                                     <div className="row float-right pr-3">
//                                                         <img 
//                                                             alt="logo" 
//                                                             class="dials" 
//                                                             src="../../images/minus.png" 
//                                                             onClick={handleDecrementDuration}
//                                                         />                                           
//                                                         <div class="number">{duration}</div> 
//                                                         <img 
//                                                             alt="logo" 
//                                                             class="dials" 
//                                                             src="../../images/plus.png" 
//                                                             onClick={handleIncrementDuration}
//                                                         />
//                                                     </div>
//                                                 </div> 
//                                             </div>  
//                                         </div>
//                                     )
//                                 }    
//                             </span>
//                         </div>
//                     </div>

//                     <div style={{ width: '17%', marginRight: '25px' }}>
//                         <div className="row">
//                             <label>Party size</label>
//                         </div>
//                         <div className="row">
//                             <span style={{ width: '90%' }}>
//                                 <input 
//                                     type="text" 
//                                     onBlur = {handleSizeOff}
//                                     onFocus = {handleSize}
//                                     value={adults + children + infants }
//                                 />
//                             </span>
//                             <span
//                                 style={{ width: '10%' }} 
//                                 className="close-destination" 
//                                 onClick={handleDeleteDestination()}
//                             > 
//                                 X   
//                             </span>
//                         </div>
//                         <div className="row">
//                             <span style={{ width: '100%' }} >
                        
//                                 {
//                                     state.size && (
//                                         <>
//                                             <div className="dropdown-size pt-3 pl-3 pr-3">
//                                                 <div className="row">
//                                                     <div className="col-md-7">
//                                                         <p className="people">Adults</p>
//                                                         <p className="age">14 + years</p>
//                                                     </div>
//                                                     <div className="col-md-5">
//                                                         <div className="row float-right pr-3">
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/minus.png" 
//                                                                 onClick={handleDecrementAdults}
//                                                             />                                           
//                                                             <div class="number">{adults}</div> 
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/plus.png" 
//                                                                 onClick={handleIncrementAdults}
//                                                             />
//                                                         </div>
//                                                     </div> 
//                                                 </div>
        
//                                                 <div className="row">
//                                                     <div className="col-md-7">
//                                                         <p className="people">Children</p>
//                                                         <p className="age">2 - 13 years</p>
//                                                     </div>
//                                                     <div className="col-md-5">
//                                                         <div className="row float-right pr-3">
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/minus.png" 
//                                                                 onClick={handleDecrementChildren}
//                                                             />                                           
//                                                             <div class="number">{children}</div> 
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/plus.png" 
//                                                                 onClick={handleIncrementChildren}
//                                                             />
//                                                         </div>
//                                                     </div> 
//                                                 </div>
        
//                                                 <div className="row">
//                                                     <div className="col-md-7">
//                                                         <p className="people">Infants</p>
//                                                         <p className="age">Under 2 years</p>
//                                                     </div>
//                                                     <div className="col-md-5">
//                                                         <div className="row float-right pr-3">
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/minus.png" 
//                                                                 onClick={handleDecrementInfants}
//                                                             />                                           
//                                                             <div class="number">{infants}</div> 
//                                                             <img 
//                                                                 alt="logo" 
//                                                                 class="dials" 
//                                                                 src="../../images/plus.png" 
//                                                                 onClick={handleIncrementInfants}
//                                                             />
//                                                         </div>
//                                                     </div> 
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )
//                                 }    
//                             </span>
//                         </div>
//                     </div>
                    
//                     <div style={{ width: '8%', marginTop: '-6px' }}>
//                         <label>&nbsp;</label>
//                         <Link to="/search-results">
//                             <button>
//                                 <BiSearch style={{ color: '#fff', width: '25px', height: '25px'}} />
//                             </button>
//                         </Link>  
//                     </div> 

//                 </div>
//             </div>
//         </SearchBar>
//     ) 
//     return content;  
// } 

// export default Search
