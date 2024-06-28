import React, { useEffect, useState } from 'react'

import Dropdown from './Dropdown'

const FetchData = () => {


  const [weatherData,setWeatherData] = useState({})

  const [loading, setLoading] = useState(true)

  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(()=>{
      fetchWeatherData()
  },[])

  const fetchWeatherData = async() =>{

      const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
      
      if(!data){
        throw new Error('Failed to fetch weather data');
      }
      const json = await data.json();

      setWeatherData(json)

      setLoading(false)
  }

  if(loading) return <div> Loading....</div>

  const dateList = weatherData.hourly.time

  const handleSelect = (item) =>{
      setSelectedItem(item)
  }
  const temperatureList = weatherData.hourly.temperature_2m
  
  return (
    <div>
        <h1> Weather Forecast Data</h1>
        {
          weatherData && (
            <div>
              <h3> latitude: {weatherData.latitude} </h3>
              <h3> longitude: {weatherData.longitude} </h3>
              <h3> Timezone: {weatherData.timezone}</h3>
              
              <Dropdown list = {dateList} onSelect ={()=> handleSelect()} temperatureList = {temperatureList}/>
              
            </div>
          )
        }
        

    </div>
  )
}

export default FetchData