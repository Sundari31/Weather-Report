import React, { useState } from "react"
import axios from "axios"
import Background from "./Background"

const Weather = () => {
  const [inputCity, setInputCity] = useState("")
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")
  const [humidity, setHumidity] = useState("")

  function handleCity(evt) {
    setInputCity(evt.target.value)
  }

  function getWeather() {
    setCity(inputCity)

    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=23bdb9578c2cbf9bd6537aa3fad03f92&units=metric`
    ).then((success) => {
      setWeather(success.data.weather[0].main)
      setDesc(success.data.weather[0].description)
      setTemp(success.data.main.temp)
      setHumidity(success.data.main.humidity)
    })
  }

  return (
    <Background weather={weather}>
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center text-white">
        
        <h1 className="text-4xl font-bold tracking-wide mb-6">🌤 Weather Report</h1>

        <div className="flex justify-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city..."
            className="w-2/3 px-4 py-2 rounded-xl border border-white/40 bg-white/30 text-black placeholder-gray-600 focus:outline-none"
            onChange={handleCity}
            value={inputCity}
          />
          <button
            onClick={getWeather}
            className="px-4 py-2 rounded-xl bg-indigo-700 hover:bg-indigo-800 transition text-white font-semibold shadow-md"
          >
            Get Report
          </button>
        </div>

        {city && (
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{city}</h2>
            <p className="text-5xl font-bold mb-2">{temp}°C</p>
            <p className="text-xl capitalize">{desc}</p>
            <p className="text-lg mt-2">
              <strong>🌦 Weather:</strong> {weather}
            </p>
            <p className="text-lg">
              <strong>💧 Humidity:</strong> {humidity}%
            </p>
          </div>
        )}
      </div>
    </Background>
  )
}

export default Weather