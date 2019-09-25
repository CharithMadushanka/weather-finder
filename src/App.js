import React from "react";
import Titles from "./components/titles/titles.component";
import Form from "./components/form/form.component";
import Weather from "./components/weather/weather.component";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: "",
      country: "",
      temperature: "",
      humidity: "",
      conditions: "",
      error: ""
    };
  }

  getWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if (city && country) {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ process.env.REACT_APP_KEY }&units=metric`
      );
      const data = await response.json();

      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        conditions: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: "",
        country: "",
        temperature: "",
        humidity: "",
        conditions: "",
        error: "Please provide city and country"
      });
    }
  };

  render() {
    const {
      city,
      country,
      temperature,
      humidity,
      conditions,
      error
    } = this.state;

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-4 title-container">
                  <Titles />
                </div>
                <div className="col-12 col-sm-6 col-md-8 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    city={city}
                    country={country}
                    temperature={temperature}
                    humidity={humidity}
                    conditions={conditions}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
