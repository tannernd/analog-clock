import React from "react";

function Clock(props) {
  var tmp = [];
  for (var i = 0; i < 60; i++) {
    tmp.push(i);
  }
  var indents = tmp.map(function (i) {
    let rotateStyle = 6 * i;
    console.log(rotateStyle);
    return (
      <div
        key={i}
        className="minutelines"
        style={{
          transform: `rotate(${rotateStyle}deg)`,
        }}
      ></div>
    );
  });
  return (
    <div className="clock">
      <div className="middle"></div>
      <div>
        <div className="hour"></div>
        <div className="minute"></div>
      </div>
      {indents}
    </div>
  );
}

export default Clock;
