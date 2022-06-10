import { useState } from "react";

const useTimePicker = () => {
  const [data, setData] = useState();

  const parseDate = (value) => {
    let arr, d, hh, mm;

    if (value) {
      arr = value.toString().split(":");
      hh = parseInt(arr[0]);
      mm = parseInt(arr[1]);
    } else {
      d = new Date();
      hh = d.getHours();
      let mm1 = d.getMinutes();
      mm = parseInt(Math.round(mm1 / 10) + "0");
    }
    return { hh, mm };
  };

  const handleOpen = (callback, e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      name,
      callback,
      value: parseDate(value),
      close: () => setData(),
    });
  };

  return { data, handleOpen };
};

export default useTimePicker;
