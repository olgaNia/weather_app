import "./descriptionWidgets.css";
import {FaArrowDown} from "react-icons/fa"
import React from 'react';

const DescriptionWidgets = ({weather, units}) => {

    const tempUnit =  units === 'imperial' ? 'F': 'C'
    const cards = [
        {
            id: 1,
            // icon :
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
            },
        {
            id: 2,
            // icon :
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            // icon :
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            // icon :
            title: "pressure",
            data: weather.pressure.toFixed(),
            unit: 'hPa',
        },
        {
            id: 5,
            // icon :
            title: "humidity",
            data: weather.humidity,
            unit: '%',
        },
        {
            id: 6,
            // icon :
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: 'm/c',
        },

]


    return (
        <div className="section section_descriptionWidgets">
            <div className="card">
                <div className="description_card">
                    <FaArrowDown/>
                    <small>min</small>
                </div>
                <h3>70 F</h3>
            </div>
            <div className="card">
                <div className="description_card">
                    <FaArrowDown/>
                    <small>min</small>
                </div>
                <h3>70 F</h3>
            </div>
            <div className="card">
                <div className="description_card">
                    <FaArrowDown/>
                    <small>Min</small>
                </div>
                <h3>70 F</h3>
            </div>
            <div className="card">
                <div className="description_card">
                    <FaArrowDown/>
                    <small>Min</small>
                </div>
                <h3>70 F</h3>
            </div>
        </div>
    );
};

export default DescriptionWidgets;