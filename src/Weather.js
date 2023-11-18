import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=197ef3a642b76eef90e131866f74a0a0&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  if (temperature) {
    return (
      <h4>
        The tmperature in {props.city} is {Math.round(temperature)} ℃
      </h4>
    );
  } else {
    return <p>Loading...</p>;
  }
}
