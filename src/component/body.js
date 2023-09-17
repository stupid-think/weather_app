import React from "react";
import { useState, useEffect } from "react";
import Slider from "./slider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import OpacityIcon from "@mui/icons-material/Opacity";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import FlareIcon from "@mui/icons-material/Flare";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import NightsStayIcon from "@mui/icons-material/NightsStay";
// import axios from 'axios';
import CloudIcon from "@mui/icons-material/Cloud";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import SearchIcon from "@mui/icons-material/Search";

const Body = () => {
  const [text, settext] = useState("");
  const [city, setcity] = useState("kolkata");
  const [datas, setdatas] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcb20208ca20f30893565a2df8f57874&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setdatas(data);
      setWeather(data.weather);
    };
    fetchApi();
  }, [city]);

  const sunriseTime = new Date(datas?.sys?.sunrise * 1000).toLocaleString();

  const handleSearch = () => {
    if (text) {
      setcity(text);
    }
    // settext(text);
    // console.log(text);
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    settext(event.target.value);
  };
  const date = new Date();
  const dt = date.toDateString();

  function convertTo12HourFormat() {
    const timeParts = String(sunriseTime.split(",")[1]).trim().split(":");
    return `0${timeParts[0]}:${timeParts[1]} AM`;
  }

  return (
    <>
      {/* header section  */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-around my-4 h-1/5">
          <div className="">
            <h1 className="text-white text-2xl font-semibold">
              <CloudIcon className="text-white" /> weather
              <span className="text-red-400 font-bold">.io</span>
            </h1>
          </div>
          <form
            action=""
            className="w-1/3 flex justify-between items-center rounded-xl hidden lg:block"
          >
            <input
              type="text"
              placeholder="Enter city name"
              id="searchbar"
              className="w-10/12 overflow-hidden pl-4 text-white rounded-xl outline-0"
              value={text}
              onChange={handleOnChange}
            />
            <label htmlFor="searchbar">
              <SearchIcon
                className="text-white text-3xl ml-[20px] lg:ml-0 cursor-pointer "
                onClick={handleSearch}
              />
            </label>
          </form>
          <button className="bg-red-600 text-white rounded-xl px-2 py-1 text-sm">
            <LocationSearchingIcon className="mr-1 text-2xl" />
            <span className="hidden lg:inline-block">current location</span>
          </button>
        </div>

        <form
          action=""
          className="flex items-center justify-center rounded-sm lg:hidden gap-2"
        >
          <input
            type="text"
            placeholder="Enter city name"
            id="searchbar"
            className="w-[85%] overflow-hidden text-white rounded-md outline-0 px-2 py-1"
            value={text}
            onChange={handleOnChange}
          />
          <label htmlFor="searchbar">
            <SearchIcon
              className="text-white text-3xl cursor-pointer"
              onClick={handleSearch}
            />
          </label>
        </form>

        <div className="flex flex-col justify-center gap-4 lg:flex-row p-2">
          <div className="bg-stone-800 lg:w-1/5 rounded-3xl p-7">
            <h2 className="font-bold ">Now</h2>
            <h1 className="text-4xl mt-5 flex justify-between">
              <span>
                {datas?.main?.temp}&deg;<span className="text-4xl">c </span>
              </span>
              <span className="ml-[20px]">
                <ThunderstormIcon className="" />
              </span>
            </h1>
            <p className="my-4 mt-12 text-2xl font-bold">
              {weather && weather[0]?.main && weather[0].main}
            </p>
            <hr className="mt-12" />
            <p className="mt-3">
              <CalendarTodayIcon className="" /> {dt}
            </p>
            <p className="mt-1.5">
              <LocationOnIcon /> {datas?.name}, {datas?.sys?.country}
            </p>
          </div>
          <div className="lg:w-3/4 bg-stone-800 rounded-3xl p-7">
            <h2 className="font-bold mb-5">Today's Highlights</h2>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-2 bg-black lg:w-1/2 p-4 rounded-3xl ">
                <div className="flex justify-between">
                  <h2 className="mb-5">Air Quality Index</h2>
                  <h2 className="bg-green-800 px-3 rounded-xl h-7">Good</h2>
                </div>
                <div className="flex justify-around">
                  <AirIcon className="scale-150 " />
                  <div>
                    <p>PM25</p>
                    <h2 className="text-2xl font-bold">3.90</h2>
                  </div>

                  <div>
                    <p>SO2</p>
                    <h2 className="text-2xl font-bold">3.90</h2>
                  </div>

                  <div>
                    {" "}
                    <p>NO2</p>
                    <h2 className="text-2xl font-bold">3.90</h2>
                  </div>
                  <div>
                    <p>O3</p>
                    <h2 className="text-2xl font-bold">3.90</h2>
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-black lg:w-1/2 p-4 rounded-3xl ">
                <h2 className="mb-5">Sunrise & Sunset</h2>
                <div className="flex justify-evenly">
                  <div className="">
                    <div className="flex justify-between">
                      <WbSunnyIcon className="scale-150 mr-6" />
                      <div>
                        <p>sunrise</p>
                        <p className="text-2xl font-bold">
                          {convertTo12HourFormat()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-between">
                      <DarkModeIcon className="scale-150 mr-6" />
                      <div>
                        <p>sunset</p>
                        <p className="text-2xl font-bold">6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black rounded-xl p-5">
                <h2 className="mb-5">Humidity</h2>
                <div className="mb-5 font-bold">
                  <OpacityIcon className="mr-8 " />
                  <span>{datas?.main?.humidity} %</span>
                </div>
              </div>
              <div className="bg-black rounded-xl  p-5">
                <h2 className="mb-5">Pressure</h2>
                <div className="mb-5 font-bold ">
                  <KeyboardDoubleArrowRightIcon className=" mr-8 " />
                  <span>{datas?.main?.pressure} Pa</span>
                </div>
              </div>
              <div className="bg-black rounded-xl p-5 ">
                <h2 className="mb-5">Wind Speed</h2>
                <div className="mb-5 font-bold">
                  <MultipleStopIcon className="mr-6 " />
                  <span>{datas?.wind?.speed} Km/h</span>
                </div>
              </div>
              <div className="bg-black rounded-xl p-5">
                <h2 className="mb-5">UV Index</h2>
                <div className="mb-5 font-bold">
                  <FlareIcon className="mr-8 " />
                  <span>4</span>
                </div>
              </div>
              <div className="bg-black rounded-xl  p-5">
                <h2 className="mb-5">Visibility</h2>
                <div className="mb-5 font-bold">
                  <VisibilityIcon className="mr-8 " />
                  <span>{datas?.visibility / 1000} Km</span>
                </div>
              </div>
              <div className="bg-black rounded-xl  p-5">
                <h2 className="mb-5">Feels Like</h2>
                <div className="mb-5 font-bold">
                  <DeviceThermostatIcon className="mr-8" />
                  <span>{datas?.main?.feels_like} &deg;c</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* last div */}
        <div className="flex flex-col lg:flex-row p-2 gap-4">
          <div className="grid lg:w-1/4 gap-2">
            <h2 className="pl-5 text-xl font-bold">5 Days Forecast</h2>
            <div className="grid rounded-3xl p-4 bg-stone-800 gap-4">
              <h2 className="flex justify-evenly">
                <NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span>
              </h2>
              <h2 className="flex justify-evenly">
                <NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span>
              </h2>
              <h2 className="flex justify-evenly">
                <NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span>
              </h2>
              <h2 className="flex justify-evenly">
                <NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span>
              </h2>
              <h2 className="flex justify-evenly">
                <NightsStayIcon /> <span>4&deg;c</span> <span>Sunday</span>
              </h2>
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="pl-5 text-2xl font-bold mb-2">Today At</h2>
            <div className="h-3/5 rounded-3xl w-full bg-stone-800">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
