export const getDegrees = (hour, minute) => {
  //There are 6 degrees per minute on the clock
  let minDegree = 6 * minute;
  //The hour hand moves 30 degrees every hour and then moves an additional 0.5 degrees per minute
  let hourDegree = 30 * hour + 0.5 * minute;

  return {
    minuteDegree: minDegree,
    hourDegree: hourDegree,
  };
};

export const minuteLines = () => {
  let clockEl = document.getElementsByClassName("clock")[0];
  let minutelines = document.getElementsByClassName("minutelines");
  for (let i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='minutelines'></div>";
    minutelines[i].style.transform = "rotate(" + 6 * i + "deg)";
  }
};
