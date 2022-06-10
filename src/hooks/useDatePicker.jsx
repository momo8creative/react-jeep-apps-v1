import { useState } from "react";

const useDatePicker = () => {
  const [data, setData] = useState();

  const parseDate = (value) => {
    let arr, d, dd, mm, yyyy;

    if (value) {
      arr = value.toString().split("/");
      dd = parseInt(arr[0]);
      mm = parseInt(arr[1]);
      yyyy = parseInt(arr[2]);
    } else {
      d = new Date();
      dd = d.getDate();
      mm = d.getMonth() + 1;
      yyyy = d.getFullYear();
    }
    return { dd, mm, yyyy };
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

export default useDatePicker;
