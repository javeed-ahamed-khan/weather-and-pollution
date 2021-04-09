import { useState } from "react";
import WeatherTable from "./Weather";

function WeatherPage() {
  const [city, setCity] = useState("");
  const [json, setJson] = useState("");
  const handleClick = async () => {
    if (city.trim() === "") {
      alert("Bad Request type Input field may be empty");
      return;
    }
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1344a73d468f2b6aff8747cbdf76be71`
    );
    if (response.ok) {
      let newJson = await response.json();
      console.log(response);

      setJson(newJson);
    } else {
      if (response.status === 404) {
        alert("City not found.");
      } else {
        alert("Error: ", response.status());
      }
    }
  };
  return (
    <div className="container ">
      <div className="col-md-12 mt-5 input-group">
        <input
          className="form-control "
          placeholder="Ex: Mumbai"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="mt-3 col-md-2 offset-5 col-12">
        <button className="btn btn-danger" onClick={handleClick}>
          Get Weather
        </button>
      </div>
      <div className="mt-4">
        {Object.keys(json).length !== 0 ? (
          <WeatherTable json={json} />
        ) : (
          <h3 className="text-center">
            Enter the City name to check the Weather.
          </h3>
        )}
      </div>
    </div>
  );
}

export default WeatherPage;
