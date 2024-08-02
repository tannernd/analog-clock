import React from "react";
import { useFormik } from "formik";

function ClockInput(props) {
  const { time, setTime, currHour, currMinute } = props;
  const formik = useFormik({
    initialValues: {
      hour: currHour,
      minute: currMinute,
    },
    onSubmit: async (values) => {
      await setTime({ hour: values.hour, minute: values.minute });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formspace">
        <label>Hour:</label>
        <input
          id="hour"
          name="hour"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.hour}
          min="1"
          inc="1"
          max="12"
        />
      </div>
      <div className="formspace">
        <label>Minute:</label>
        <input
          id="minute"
          name="minute"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.minute}
          min="0"
          inc="1"
          max="59"
        />
      </div>
      <button type="submit">Set the Clock</button>
    </form>
  );
}

export default ClockInput;
