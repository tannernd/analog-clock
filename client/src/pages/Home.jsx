import React, { useState, useEffect } from "react";
import moment from "moment";
import { getDegrees, minuteLines } from "../utils/helper.js";
import Clock from "../components/Clock.jsx";
import ClockInput from "../components/ClockInput.jsx";

function Home(props) {
  const currHour = moment().format("h");
  const currMinute = moment().minute();
  const [time, setTime] = useState({ hour: currHour, minute: currMinute });

  useEffect(() => {
    let hourEl = document.querySelector(".hour");
    let minuteEl = document.querySelector(".minute");
    let newTime = getDegrees(time.hour, time.minute);
    console.log(newTime.hourDegree);
    hourEl.style.transform = "rotate(" + newTime.hourDegree + "deg)";
    minuteEl.style.transform = "rotate(" + newTime.minuteDegree + "deg)";
  }, [time]);
  useEffect(() => {
    minuteLines();
  }, []);
  return (
    <div className="container">
      <ClockInput
        currHour={currHour}
        currMinute={currMinute}
        time={time}
        setTime={setTime}
      />
      <Clock />
    </div>
  );
}

export default Home;
