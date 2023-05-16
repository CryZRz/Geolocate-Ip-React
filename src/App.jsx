import { useState } from "react";

import { ShowInfo } from "./Components//ShowInfo";
import { MapContent } from "./Components/MapComponent";

import imageButtom from "./assets/icon-arrow.svg";
import "./App.css"

const App = () => {
  const [ip, setIp] = useState("");
  
  const [location, setLocation] = useState({
    ip: "8.8.8.8",
    region: "California",
    timezone: "America/Los_Angeles",
    org: "Google LLC",
    latitude: "37.42301",
    longitude: "-122.083352",
  });

  function handleSubmit(e) {
    e.preventDefault();

    async function getDatesIp() {
      try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        
        setLocation(data);
      } catch (e) {
        alert(e)
      }

    }

    if (ip == "") {
      return alert("insert a ip")
    }

    getDatesIp();
  }

  function lisenChange(e) {
    setIp(e.target.value);
  }

  return (
    <div>
      <header className="header">
        <form className="form-get-ip" onSubmit={handleSubmit}>
          <h2 className="title-get-ip">IP Address Tracker</h2>
          <div className="get-ip">
            <input
              type="text"
              placeholder="Enter a your Ip"
              onChange={lisenChange}
            ></input>
            <button>
              <img src={imageButtom} alt=""></img>
            </button>
          </div>
        </form>
        <ShowInfo location={location} />
      </header>
      <MapContent position={location} />
    </div>
  );
};

export default App;
