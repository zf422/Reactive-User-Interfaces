import React, { Component } from "react";
import "./App.css";
import DarkSkyApi from "dark-sky-api";
import Searchbox from "./Searchbox";
import { CircularProgress } from "material-ui/Progress";
import Geocode from "react-geocode";
// import ReactAnimatedWeather from "react-animated-weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toCelsius = this.toCelsius.bind(this);
    this.toFarenheit = this.toFarenheit.bind(this);
    this.state = {
      weatherData: [],
      forecastData: [],
      hourlyData: [],
      search: "",
      location: "",
      clothes: "",
      clothes2: "",
      iconCloth: "",
      iconCloth2: "",
      alt: "",
      alt2: "",
      weatherIcon: "",
      units: "us",
      active: "imperial"
    };
    DarkSkyApi.apiKey = "82618983c8fb4ed220bd376e210f63da";
    DarkSkyApi.proxy = false;
    Geocode.setApiKey("AIzaSyDDiDv_Hg3L2VNKvJVCEmWsGz1sqaSzVV4");
    DarkSkyApi.setUnits(this.state.units);
  }

  onSearch(query) {
    this.setState({
      search: query
    });
  }

  toCelsius() {
    this.setState({
      units: "si",
      active: "metric"
    })
  }

  toFarenheit() {
    this.setState({
      units: "us",
      active: "imperial"
    })
  }

  onSubmit(query) {
    Geocode.fromAddress(this.state.search).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(response);
      console.log(lat, lng);
      const position = {
        latitude: lat,
        longitude: lng
      };
      DarkSkyApi.loadCurrent(position).then(result => {
        this.setState({
          weatherData: result
        });
        if (result.temperature <= 55 && result.windspeed <= 5) {
          this.setState({
            clothes: "Scarf",
            iconCloth: "icons/scarf.png",
            alt: "scarf-icon"
          });
        } else if (result.temperature >= 75 && result.uvIndex >= 4) {
          this.setState({
            clothes: "Shorts",
            iconCloth: "icons/shorts.png",
            alt: "shorts-icon"
          });
        }
          else if (result.temperature <= 50) {
            this.setState({
              clothes: "Scarf",
              iconCloth: "icons/scarf.png",
              alt: "scarf-icon"
            });
        } else if (result.icon === "rain") {
          this.setState({
            clothes: "Raincoat",
            iconCloth: "icons/raincoat.png",
            alt: "raincoat-icon"
          });
        } else if (result.icon === "clear-day") {
          this.setState({
            clothes: "Sunglasses",
            iconCloth: "icons/sunglasses.png",
            alt: "sunglasses-icon"
          });
        } else if (result.icon === "clear-night") {
          this.setState({
            clothes: "Anything comfy!",
            iconCloth: "icons/comfy.png",
            alt: "comfy-icon"
          });
        }

        if (result.icon === "partly-cloudy-night") {
          this.setState({
            weatherIcon: "weatherIcons/wi-night-alt-cloudy.svg"
          });
        } else if (result.icon === "partly-cloudy-day") {
          this.setState({
            weatherIcon: "weatherIcons/wi-day-cloudy.svg"
          });
        } else if (result.icon === "clear-day") {
          this.setState({
            weatherIcon: "weatherIcons/wi-day-sunny.svg"
          });
        } else if (result.icon === "clear-night") {
          this.setState({
            weatherIcon: "weatherIcons/clear-night.svg"
          });
        } else if (result.icon === "rain") {
          this.setState({
            weatherIcon: "weatherIcons/wi-day-rain.svg"
          });
        } else if (result.icon === "cloudy") {
          this.setState({
            weatherIcon: "weatherIcons/cloudy.svg"
          });
        } else if (result.icon === "wind") {
          this.setState({
            weatherIcon: "weatherIcons/wind.svg"
          });
        } else if (result.icon === "snow") {
          this.setState({
            weatherIcon: "weatherIcons/snow.svg"
          });
        } else if (result.icon === "sleet") {
          this.setState({
            weatherIcon: "weatherIcons/sleet.svg"
          });
        } else if (result.icon === "fog") {
          this.setState({
            weatherIcon: "weatherIcons/fog.svg"
          });
        } else if (result.icon === "hail") {
          this.setState({
            weatherIcon: "weatherIcons/hail.svg"
          });
        } else if (result.icon === "tornado") {
          this.setState({
            weatherIcon: "weatherIcons/tornado.svg"
          });
        }

        console.log(result);
      });
      DarkSkyApi.loadItAll().then(results => {
        this.setState({
          hourlyData: results
        });
        console.log(results);
        Geocode.fromLatLng(lat, lng).then(
          response => {
            const address = response.results[4].formatted_address;
            console.log(response);
            this.setState({
              location: address
            });
          },
          error => {
            console.error(error);
          }
        );
      });
    });
  }

  componentDidMount() {
    DarkSkyApi.loadItAll().then(res => {
      this.setState({
        hourlyData: res
      });
      console.log(res);
    });

    DarkSkyApi.loadCurrent().then(response => {
      this.setState({
        weatherData: response
      });
      if (response.temperature <= 55 && response.windspeed <= 5) {
        this.setState({
          clothes: "Scarf",
          iconCloth: "icons/scarf.png",
          alt: "scarf-icon"
        });
      } else if (response.temperature >= 75 && response.uvIndex >= 4) {
        this.setState({
          clothes: "Shorts",
          iconCloth: "icons/shorts.png",
          alt: "shorts-icon"
        });
      }
        else if (response.temperature <= 50) {
          this.setState({
            clothes: "Scarf",
            iconCloth: "icons/scarf.png",
            alt: "scarf-icon"
          });
      } else if (response.icon === "rain") {
        this.setState({
          clothes: "Raincoat",
          iconCloth: "icons/raincoat.png",
          alt: "raincoat-icon"
        });
      } else if (response.icon === "clear-day") {
        this.setState({
          clothes: "Sunglasses",
          iconCloth: "icons/sunglasses.png",
          alt: "sunglasses-icon"
        });
      } else if (response.icon === "clear-night") {
        this.setState({
          clothes: "Anything comfy!",
          iconCloth: "icons/comfy.png",
          alt: "comfy-icon"
        });
      }
      if (response.icon === "partly-cloudy-night") {
        this.setState({
          weatherIcon: "weatherIcons/wi-night-alt-cloudy.svg"
        });
      } else if (response.icon === "partly-cloudy-day") {
        this.setState({
          weatherIcon: "weatherIcons/wi-day-cloudy.svg"
        });
      } else if (response.icon === "clear-day") {
        this.setState({
          weatherIcon: "weatherIcons/wi-day-sunny.svg"
        });
      } else if (response.icon === "clear-night") {
        this.setState({
          weatherIcon: "weatherIcons/clear-night.svg"
        });
      } else if (response.icon === "rain") {
        this.setState({
          weatherIcon: "weatherIcons/wi-day-rain.svg"
        });
      } else if (response.icon === "cloudy") {
        this.setState({
          weatherIcon: "weatherIcons/cloudy.svg"
        });
      } else if (response.icon === "wind") {
        this.setState({
          weatherIcon: "weatherIcons/wind.svg"
        });
      } else if (response.icon === "snow") {
        this.setState({
          weatherIcon: "weatherIcons/snow.svg"
        });
      } else if (response.icon === "sleet") {
        this.setState({
          weatherIcon: "weatherIcons/sleet.svg"
        });
      } else if (response.icon === "fog") {
        this.setState({
          weatherIcon: "weatherIcons/fog.svg"
        });
      } else if (response.icon === "hail") {
        this.setState({
          weatherIcon: "weatherIcons/hail.svg"
        });
      } else if (response.icon === "tornado") {
        this.setState({
          weatherIcon: "weatherIcons/tornado.svg"
        });
      }

      console.log(response);
    });

    DarkSkyApi.loadForecast().then(results => {
      this.setState({
        forecastData: results
      });
      console.log(results);
      const latitudeData = results.latitude;
      const longitudeData = results.longitude;

      Geocode.fromLatLng(latitudeData, longitudeData).then(
        response => {
          const address = response.results[1].formatted_address;
          console.log(response);
          this.setState({
            location: address
          });
        },
        error => {
          console.error(error);
        }
      );
    });
  }

  render() {
    if (this.state.hourlyData.length === 0) {
      return <CircularProgress />;
    }

    const responseUnits = DarkSkyApi.getResponseUnits();

    let hourlyForecastData = this.state.hourlyData.hourly.data;

    const hourlyForecast = hourlyForecastData.map((hourly, i) => {
      const time = new Date(hourly.time * 1000);
      // Hours part from the timestamp
      const hours =
        time.getHours() > 12 ? time.getHours() - 12 : time.getHours();

      const am_pm = time.getHours() >= 12 ? "PM" : "AM";

      const hourlyIcon = "weatherIcons/" + hourly.icon + ".svg";

      return (
        <div className="sub-second" key={i}>
          <h3>
            {Math.round(hourly.apparentTemperature)}°
            {responseUnits.temperature.toUpperCase()}
          </h3>
          <div className="textboxHourly">
            <p> {hourly.summary}</p>
          </div>
          <div className="imageHourly">
            <img className="hourlyIcon" src={hourlyIcon} alt="" />
          </div>
          <h3>
            {hours} {am_pm}
          </h3>
        </div>
      );
    });

    const weatherData = this.state.weatherData;
    return (
      <div className="App">
        <div className="header">
          <Searchbox
            label="search"
            onChange={this.onSearch}
            onKeyDown={this.onSubmit}
          />
        </div>
        <button className={this.state.active === "imperial" ? 'active' : ''} onClick={this.toFarenheit}>Imperial</button>
        <button className={this.state.active === "metric" ? 'active' : ''} onClick={this.toCelsius}>Metric</button>
        <div className="first">
          <div className="forecast">
            <div className="iconTemp">
              <img
                className="weatherIcons"
                src={this.state.weatherIcon}
                alt=""
              />
              <div className="tempCurrent">
                <h1>
                  {Math.round(weatherData.temperature)}°
                  {responseUnits.temperature.toUpperCase()}
                </h1>
              </div>
            </div>
            <h2>{this.state.location}</h2>
            <p>{weatherData.summary}</p>
            <br />
            <p>
              Wind Speed: {Math.round(weatherData.windSpeed)}{" "}
              {responseUnits.windSpeed}
            </p>
            <p>Humidity: {Math.round(weatherData.humidity * 100)}%</p>
            <p>UV index: {weatherData.uvIndex}</p>
          </div>
          <div className="clothesRec">
            <h3> Recommended Clothing: </h3>
            <br />
            <img
              className="image"
              src={this.state.iconCloth}
              alt={this.state.alt}
            />
            <p> {this.state.clothes} </p>
          </div>
        </div>
        <div className="second">{hourlyForecast}</div>
      </div>
    );
  }
}

export default App;
