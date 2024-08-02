import React from "react";

function Clock(props) {
  return (
    <div className="clock">
      <div className="minutelines"></div>
      <div className="middle"></div>
      <div>
        <div className="hour"></div>
        <div className="minute"></div>
      </div>
    </div>
  );
}

export default Clock;
