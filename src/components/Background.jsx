import React from "react"
import Default from '../assets/Default.jpg'
import sunny from '../assets/sunny.jpg' 
import cloudy from '../assets/cloudy.jpg'
import Rainy from '../assets/Rainy.jpg'
import thunderstorm from '../assets/thunderstorm.jpg'
import snow from '../assets/snow.jpg'
import mist from '../assets/mist.jpg'

function getBackground(weather) {
  if (!weather) 
    return Default

  switch (weather.toLowerCase()) {
    case "clear":
      return sunny
    case "clouds":
      return cloudy
    case "rain":
    case "drizzle":
      return Rainy
    case "thunderstorm":
      return thunderstorm
    case "snow":
      return snow
    case "fog":
    case "mist":
    case "haze":
      return mist
    default:
      return Default
  }
}

const Background = ({ weather, children }) => {
  const bgImage = getBackground(weather)

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      <div className="bg-black bg-opacity-40 min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default Background