import React, { useState, useEffect } from "react";
import moment from "moment";
import { getDegrees } from "../utils/helper.js";
import Header from "../components/Header.jsx";
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
    hourEl.style.transform = "rotate(" + newTime.hourDegree + "deg)";
    minuteEl.style.transform = "rotate(" + newTime.minuteDegree + "deg)";
  }, [time]);

  return (
    <div className="container">
      <Header />
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
