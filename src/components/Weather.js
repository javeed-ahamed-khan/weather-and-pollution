import React from "react";

const WeatherTable = ({ json }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sl No.</th>
            <th scope="col">Diffrent fileds</th>
            <th scope="col">Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1.</th>
            <td>City Name</td>
            <td>{json.name}</td>
          </tr>
          <tr>
            <th scope="row">2.</th>
            <td>Longitude</td>
            <td>{json.coord.lon} deg</td>
          </tr>
          <tr>
            <th scope="row">3.</th>
            <td>Longitude</td>
            <td>{json.coord.lat} deg</td>
          </tr>
          <tr>
            <th scope="row">4.</th>
            <td>Temperature</td>
            <td>{json.main.temp} Kelvin</td>
          </tr>
          <tr>
            <th scope="row">5.</th>
            <td>Pressure</td>
            <td>{json.main.pressure} hPa</td>
          </tr>
          <tr>
            <th scope="row">6.</th>
            <td>Humidity</td>
            <td>{json.main.humidity}%</td>
          </tr>
          <tr>
            <th scope="row">7.</th>
            <td>Wind Speed</td>
            <td>{json.wind.speed} meter/sec</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WeatherTable;
