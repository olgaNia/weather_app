import sunset from "./img/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
import DescriptionWidgets from "./components/DescriptionWidgets";
import {useEffect, useState} from "react";
import {formatDataWeather} from "./WeatherService";

function App() {

    const [weather,setWeather] = useState(null)
    const [units,setUnits] = useState('imperial')

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await formatDataWeather('Atlanta',units)
             console.log(data)
            setWeather(data)
            }
            fetchWeatherData()
    }, [])
    return (
        <div className="App" style={{backgroundImage: ` url(${sunset})`}}>
            <div className = "overlay">

                {
                    weather && ( <div className="container">
                        <div className="section section_input">
                            <input type="text" name="city" placeholder="Enter City"/>
                            <button>F</button>
                        </div>

                        <div className="section section_temp">
                            <div className = "icon">

                                <h4>{`${weather.name}, ${weather.country}`}</h4>
                                <img src={weather.iconUrl}
                                    alt="weatherIcon"/>

                                <h4>{weather.description}</h4>

                            </div>
                            <div className="temp">

                                <h2>{`${weather.temp.toFixed()} º ${
                                    units === 'imperial' ? 'F': 'C'
                                } `}</h2>

                            </div>
                        </div>
                        <DescriptionWidgets
                        weather = {weather}
                        units = {units}
                        />

                    </div>
                )
                }

            </div>
        </div>
    );
}

export default App;
