import React from 'react'

function Weather({city,country,temperature,humidity,conditions,error}) {
    return (
        <div className="weather__info">
            {
                city && country && <p className="weather__key">Location : <span className="weather__value">{city},{country}</span></p>
            }
            {
                temperature && <p className="weather__key">Temperature : <span className="weather__value">{temperature}°C</span></p>
            }
            {
                humidity && <p className="weather__key">Humidty : <span className="weather__value">{humidity}</span></p>
            }
            {
                conditions && <p className="weather__key">Conditions : <span className="weather__value">{conditions}</span></p>
            }
            {
                error && <p className="weather__key">{error}</p>
            }
        </div>
    )
}

export default Weather
