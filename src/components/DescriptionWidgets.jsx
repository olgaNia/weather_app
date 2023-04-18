import "./descriptionWidgets.css";
import {FaArrowDown, FaArrowUp, FaThermometerHalf} from "react-icons/fa";
import React from 'react';
import {WiBarometer, WiHumidity, WiStrongWind} from "react-icons/wi";

const DescriptionWidgets = ({weather, units}) => {

    const tempUnit = units === 'imperial' ? 'F' : 'C';
    const windUnit = units === 'imperial' ? 'mph' : 'm/c';

    const cards = [
        {
            id: 1,
            // icon :
            title: <FaArrowDown/>,
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon :<FaArrowUp/>,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon :<FaThermometerHalf/>,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon : <WiBarometer />,
            title: "pressure",
            data: weather.pressure.toFixed(),
            unit: 'hPa',
        },
        {
            id: 5,
            icon :<WiHumidity />,
            title: "humidity",
            data: weather.humidity,
            unit: '%',
        },
        {
            id: 6,
            icon : <WiStrongWind/>,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ];

    return (
        <div className="section section_descriptionWidgets">

            {cards.map(({id, icon, title, data, unit}) => (

                <div key={id} className="card">

                    <div className="description_card">
                        {icon}
                        <small> {title} </small>
                    </div>

                    <h3>{`${data} ${unit}`}</h3>
                </div>
            ))
            };
        </div>
    );
};

export default DescriptionWidgets;