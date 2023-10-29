import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css"

const Weather = () => {
   const [data, setData] = useState({})
  const [location, setLocation] = useState('')


    const apiKey = "7b6923c6476486a49af44b5aa388b816"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

    const search = async  (event) =>{
       await axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data)
        })
    }
       
      

  return (
    <div className="background color">
      <div className=" mt-10 flex items-center justify-center get">
      <input className="rounded-full text-2xl p-2 mx-10" type="text" placeholder="Enter City Name"
      value={location}
      onChange={event => setLocation(event.target.value)}
      ></input>
      <button className="bg-white btn rounded-full px-4 py-2 text-white font-semibold" type="submit" onClick={search}>Get</button>
      </div>
         <div>
          {data.main ? <h1 className="text-6xl font-bold text-center mt-24">{data.main.temp.toFixed()}°C</h1> : null}
           
          {/* <div className="rotate-90 absolute sm:left-3/4 text-2xl font-semibold">
          {data.weather[0] ? <h2>{data.weather[0].main}</h2> : null}
         </div>
         <div className="rotate-90 absolute  right-0 sm:right-3/4 text-2xl font-semibold">
          {data.weather[0] ? <h2>{data.weather[0].main}</h2> : null}
         </div> */}
          
         </div>
         <div className="text-center mt-10">
          <h2 className="text-2xl font-bold">{data.name}</h2>
         </div>
         
         {data.name != undefined &&
         <div className="flex justify-center items-center mt-10 ">
         <div className="mx-10 small">
          <h2 className="text-xl font-bold text-center">Humidity</h2>
         {data.main ? <h1 className="text-l font-semibold text-center">{data.main.humidity}%</h1> : null}
         </div>
         <div className="mx-10 small">
         <h2 className="text-xl font-bold text-center">Wind Speed</h2>
         {data.main ? <h1 className="text-l font-semibold text-center">{data.wind.speed}KPH</h1> : null}
         </div>
         <div className="mx-10 small">
         <h2 className="text-xl font-bold text-center">Feels Like</h2>
         {data.main ? <h1 className="text-l font-semibold text-center">{data.main.feels_like.toFixed()}°C</h1> : null}
         </div>
         </div>}
         
    </div>
  )
}

export default Weather