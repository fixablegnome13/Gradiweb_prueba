import React from "react";
import './styles.weatherday.css';


export const WeatherDay = ({ temperatura, ciudad, icono }) => {

    return (
        <div style={{ position: 'relative' }}>
            <div className="divContain">
                <div className="divClima">
                    <img className="image" alt={icono} src={`https://openweathermap.org/img/wn/${icono}@2x.png`} /><br />
                </div>
                <div className="divTemperatura">
                    <strong>{Math.round(temperatura)}</strong><sup><small>°C</small></sup>
                </div>
                <div className="divImagen">
                    <p style={{margin:"5%"}}><img alt="" style={{height:"35px", width:"35px"}} src={`https://i.pinimg.com/originals/b1/66/7d/b1667dc3f20372394372a781999bd474.png`} />Bogotá D.C.</p>
                </div>
            </div>
        </div>
    );

};
