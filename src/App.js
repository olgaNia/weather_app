import sunset from "./img/sean-oulashin-KMn4VEeEPR8-unsplash.jpg";
import DescriptionWidgets from "./components/DescriptionWidgets";
import {useEffect, useState} from "react";
import {formatDataWeather} from "./WeatherService";

function App() {

    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState('imperial');
    const [city, setCity] = useState('Atlanta');

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await formatDataWeather(city, units)
            setWeather(data)
        };
        fetchWeatherData()
    }, [units, city]);

    const handleTempButton = (e) => {
        const button = e.currentTarget;
        const currentUnit = button.innerText.slice(1);
        const isFahrenheit = currentUnit === 'F';
        button.innerText = isFahrenheit ? '°C' : '°F';
        setUnits(isFahrenheit ? 'imperial' : 'metric')
    };

    const inputFromKeyboard = (e) => {
        if (e.keyCode === 13) {
            setCity(e.currentTarget.value)
        }
    };

    return (
        <div className="App" style={{backgroundImage: ` url(${sunset})`}}>
            <div className="overlay">
                {weather && (<div className="container">
                            <div className="section section_input">
                                <input
                                    onKeyDown={inputFromKeyboard}
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                />
                                <button onClick={(e) => handleTempButton(e)}> °С </button>
                            </div>

                            <div className="section section_temp">

                                <div className="icon">
                                    <h4>{`${weather.name}, ${weather.country}`}</h4>
                                    <img src={weather.iconUrl}
                                         alt="weatherIcon"/>
                                    <h4>{weather.description}</h4>
                                </div>

                                <div className="temp">
                                    <h2>{`${weather.temp.toFixed()} º ${units === 'imperial' ? 'F' : 'C'} `}</h2>
                                </div>

                            </div>

                            <DescriptionWidgets
                                weather={weather}
                                units={units}
                            />

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default App;
