import React from 'react';
import { useState, useEffect } from 'react';
import Slider from './slider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import OpacityIcon from '@mui/icons-material/Opacity';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import FlareIcon from '@mui/icons-material/Flare';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import NightsStayIcon from '@mui/icons-material/NightsStay';
// import axios from 'axios';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import SearchIcon from '@mui/icons-material/Search';

const Body = () => {
    const [text, settext] = useState("");
    const [city, setcity] = useState("kolkata");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcb20208ca20f30893565a2df8f57874&units=metric`;
            const res = await fetch(url);
            const data = res.json();
            console.log(data);
        };
        fetchApi();
    }, [city]);


    const handleSearch = () => {
        setcity(text);
        // settext(text);
        // console.log(text);
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        settext(event.target.value);
    }
    return (
        <>
            {/* header section  */}
            <div className='mb-10'>
                <div className="header flex justify-around my-4 h-1/5">
                    <div className="icon">
                        <h1 className=' text-white text-2xl font-semibold'><CloudIcon className='main-icon text-white scale-150' /> weather<span className='text-red-400 font-bold'>.io</span> </h1>
                    </div>
                    <form action="" className='w-1/3   flex justify-between items-center  rounded-xl'>

                        <input type="text" placeholder='Enter city name' id='searchbar' className='w-10/12 h-full overflow-hidden pl-4 text-white rounded-xl outline-0' value={text}
                            onChange={handleOnChange} />
                        <label htmlFor="searchbar"><SearchIcon className='searchicon text-white text-3xl mr-4 cursor-pointer ' onClick={handleSearch} /></label>
                    </form>
                    <button className='bg-red-600 text-white rounded-xl px-2 py-1 text-sm'><LocationSearchingIcon className=' cl-btn mr-1 text-2xl' /><span>current location</span> </button>

                </div>

                {/* first body section div  */}
                <div className='content flex mt-20   '>

                    <div className="left bg-stone-800 w-1/5  rounded-3xl mx-10 p-7">
                        <h2 className='font-bold '>Now</h2>
                        <h1 className='text-4xl mt-5 flex justify-between'><span>10.99&deg;<span className='text-4xl'>c </span></span><span className='w-logo'><ThunderstormIcon className=' icons mr-10' /></span></h1>
                      
                        <p className='my-4 mt-12 text-2xl font-bold'>Broken cloud</p>
                        <hr className='mt-12'/>

                        <p className='mt-3'><CalendarTodayIcon className='' /> wednesday 6 sep</p>
                        <p className='mt-1.5'><LocationOnIcon /> London, GB</p>
                    </div>
                    

                    {/* second body section div  */}

                    <div className="right w-3/4 bg-stone-800 rounded-3xl mr-8 p-7">
                        <h2 className='font-bold mb-5'>Today's Highlights</h2>
                        <div className="air-sun flex justify-between gap-5  ">
                            <div className="air  bg-black w-1/2  p-4 rounded-3xl ">
                                <div className="air-header  flex justify-between">
                                    <h2 className='mb-5'>Air Quality Index</h2>
                                    <h2 className='bg-green-800 px-3 rounded-xl h-7'>Good</h2>
                                </div>
                                <div className="air-index flex justify-around">
                                    <AirIcon className='air-icon scale-150 ' />
                                    <div>
                                        <p>PM25</p>
                                        <h2 className='text-2xl font-bold'>3.90</h2>
                                    </div>

                                    <div><p>SO2</p>
                                        <h2 className='text-2xl font-bold'>3.90</h2>
                                    </div>

                                    <div> <p>NO2</p>
                                        <h2 className='text-2xl font-bold'>3.90</h2>
                                    </div>
                                    <div><p>O3</p>
                                        <h2 className='text-2xl font-bold'>3.90</h2>
                                    </div>

                                </div>

                            </div>
                            <div className="sun  bg-black w-1/2  p-4 rounded-3xl ">
                                <h2 className='mb-5'>Sunrise & Sunset</h2>
                                <div className='flex justify-evenly'>
                                    <div className="sunrise">
                                        <div className='flex justify-between'>
                                            <WbSunnyIcon className='sunrise-icon scale-150 mr-6' />
                                            <div>
                                                <p>sunrise</p>
                                                <p className='text-2xl font-bold'>6:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sunset">
                                        <div className='flex justify-between'>
                                            <DarkModeIcon className=' sunset-icon scale-150 mr-6' />
                                            <div>
                                                <p>sunset</p>
                                                <p className='text-2xl font-bold'>6:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <div className="ohers flex flex-wrap justify-around mt-5 gap-2">
                            <div className='item bg-black rounded-xl p-5'>
                                <h2 className='  mb-5'>Humidity</h2>
                                <div className='mb-5 font-bold'>
                                    <OpacityIcon className='mr-8 ' /><span>87%</span>
                                </div>

                            </div>
                            <div className='item bg-black rounded-xl  p-5'>
                                <h2 className='mb-5'>Pressure</h2>
                                <div className='mb-5 font-bold '>
                                    <KeyboardDoubleArrowRightIcon className=' mr-8 ' /><span>1013 Pa</span>
                                </div>
                            </div>
                            <div className='item bg-black rounded-xl p-5 '>
                                <h2 className='mb-5'>Wind Speed</h2>
                                <div className='mb-5 font-bold'>
                                    <MultipleStopIcon className='mr-8 ' /><span>20 Km/h</span>
                                </div>
                            </div>
                            <div className='item bg-black rounded-xl p-5'>
                                <h2 className='mb-5'>UV Index</h2>
                                <div className='mb-5 font-bold'>
                                    <FlareIcon className='mr-8 ' /><span>4</span>
                                </div>
                            </div>
                            <div className='item bg-black rounded-xl  p-5'>
                                <h2 className='mb-5'>Visibility</h2>
                                <div className='mb-5 font-bold'>
                                    <VisibilityIcon className='mr-8 ' /><span>10 Km</span>
                                </div>
                            </div>
                            <div className='item bg-black rounded-xl  p-5'>
                                <h2 className='mb-5'>Feels Like</h2>
                                <div className='mb-5 font-bold'>
                                    <DeviceThermostatIcon className='mr-8' /><span>4&deg;c</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="body-down flex">
                    <div className="forecast w-1/4  mx-5  ">
                        <h2 className='forecast-heading my-5 pl-5 text-xl font-bold'>5 Days Forecast</h2>
                        <div className='left-down rounded-3xl p-4'>
                            <h2 className='left-down-component flex justify-evenly mb-3'><NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span></h2>
                            <h2 className='left-down-component flex justify-evenly mb-3'><NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span></h2>
                            <h2 className='left-down-component flex justify-evenly mb-3'><NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span></h2>
                            <h2 className='left-down-component flex justify-evenly mb-3'><NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span></h2>
                            <h2 className='left-down-component flex justify-evenly mb-3'><NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span></h2>
                        </div>
                    </div>

                    <div className="right-down-component w-3/4 mb-4">

                        <h2 className=' p-5 text-2xl font-bold'>Today At</h2>
                        <div className='right-down h-3/5 rounded-3xl w-full'>

                            <Slider className='w-full' />

                        </div>

                    </div>
                    <div className="footer  justify-center h-7 bg-red-700 hidden">
                        <p>sudip copyright@2023</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;

