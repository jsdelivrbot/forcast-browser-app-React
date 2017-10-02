import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart  from '../components/chart';
import GoogleMap from '..components/google_maps';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (9/5 * (temp - 273) + 32));
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityData.city.id} >
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="blue" units="F" /></td>
                <td><Chart data={humidities} color="green" units="hPa" /></td>
                <td><Chart data={pressures} color="red" units="%"/></td>
            </tr>
        );
    }

    render() {
        //this.renderWeather = this.renderWeather.bind(this)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F) </th>
                        <th>Pressure (hPa) </th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}

function mapStateToProps({ weather }) {//Pulls weather from props.weather
  //same as doing const weather = state.weather.
    return { weather }; //ES6 {weather } === { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
