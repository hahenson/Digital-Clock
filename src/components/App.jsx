import React, { useState } from "react";
import morning from "../morning.png";
import afternoon from "../afternoon.png";
import night from "../night.png";
import tcrews from "../tcrews.png";

function App() {
  let hour = new Date().getHours();

  let greeting;

  const customStyle = {
    src: "",
  };

  if (hour < 12) {
    greeting = "Good Morning, Today is It";
    customStyle.src = morning;
  } else if (hour < 18) {
    greeting = "Afternoon, You Active Yet?";
    customStyle.src = afternoon;
  } else if (hour < 22) {
    greeting = "Evening, Hard Work Pays off";
    customStyle.src = night;
  } else {
    greeting = "Goals!";
    customStyle.src = tcrews;
  }

  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(
    currentTime.substring(0, currentTime.length - 3)
  );

  function getTime() {
    const currentTime2 = new Date().toLocaleTimeString();
    setInterval(setTime(currentTime2.substring(0, currentTime2.length - 3)));
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <div class="box">
        <h2>{greeting}</h2>
      </div>

      <div class="box2">
        <img alt="workout img" src={customStyle.src} />
      </div>

      {/* <button onClick={getTime}>
        <span>Button</span>
      </button> */}
      <p>
        Make sure you Come back <br />
        <em>Throughout the day.. a different Image</em>
      </p>
    </div>
  );
}

export default App;
