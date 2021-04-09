import NO from "./Gases/nitric-oxidie.png";
import NO2 from "./Gases/no2.jpg";
import SO2 from "./Gases/SO2.jpg";
import O3 from "./Gases/O3.jpg";
import NH3 from "./Gases/NH3.jpg";
import PM25 from "./Gases/PM25.png";
import PM10 from "./Gases/PM10.png";
import CO from "./Gases/CO.png";
import { useState } from "react";

function AirPollution() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [res, setRes] = useState({});

  const handleClick = async () => {
    const newRes = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=1344a73d468f2b6aff8747cbdf76be71`
    ).then((response) => response.json());
    if (newRes.cod) {
      alert(newRes.message);
    } else {
      setRes(newRes);
    }
  };

  return (
    <>
      <h6>
        Latitude and longitude are a pair of numbers (coordinates) used to
        describe a position on the plane of a geographic coordinate system. The
        numbers are in decimal degrees format and range from -90 to 90 for
        latitude and -180 to 180 for longitude.
      </h6>
      <div className=" row">
        <div className="col-md-5 offset-md-1 mt-3">
          <input
            className="input-group shadow rounded"
            placeholder="Latitude  range from -90 to 90"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="col-md-5 mt-3">
          <input
            className="input-group shadow rounded"
            placeholder="Longitude range from -180 to 180"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
        </div>
        <div className="col-md-2 offset-md-5 mt-3">
          <button
            className="btn btn-danger col-md-12 shadow"
            onClick={handleClick}
          >
            Sumbit
          </button>
        </div>
      </div>
      {!Object.keys(res).length ? null : (
        <>
          <div className="data">
            <div className="sample shadow tumbnail ">
              <img src={SO2} alt="so2" />
              <h6>{res.list[0].components.so2} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={CO} alt="co" />
              <h6>{res.list[0].components.co} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={NO} alt="NO" />
              <h6>{res.list[0].components.no} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={NO2} alt="NO2" />
              <h6>{res.list[0].components.no2} μg/m3</h6>
            </div>
          </div>
          <div className="data">
            <div className="sample shadow">
              <img src={O3} alt="O3" />
              <h6>{res.list[0].components.o3} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={NH3} alt="NH3" />
              <h6>{res.list[0].components.nh3} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={PM25} alt="PM2.5" />
              <h6>{res.list[0].components.pm2_5} μg/m3</h6>
            </div>
            <div className="sample shadow">
              <img src={PM10} alt="PM10" />
              <h6>{res.list[0].components.pm10} μg/m3</h6>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AirPollution;
