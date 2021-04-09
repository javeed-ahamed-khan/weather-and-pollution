import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AirPollution from "./components/AirPollution";
import WeatherPage from "./components/WeatherPage";
import WeatherPic from "./WeatherPic.jpg";

function App() {
  return (
    <>
      <Router>
        <Link to="/">
          <img id="mainPic" src={WeatherPic} alt="logo" />
        </Link>
        <Switch>
          <Route path="/" exact>
            <div className="row my-5">
              <div className="col-md-2 offset-md-4 col-sm-12">
                <Link to="/weather">
                  <button className="col-md-12 btn btn-primary">Weather</button>
                </Link>
              </div>
              <div className="col-md-2 col-sm-12">
                <Link to="/pollution">
                  <button className="col-md-12  btn btn-primary">
                    Pollution
                  </button>
                </Link>
              </div>
            </div>
          </Route>
          <Route path="/pollution" component={AirPollution} exact />
          <Route path="/weather" component={WeatherPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
