import { useState } from "react";

const useAlert = () => {
  const [alertValue, setAlertValue] = useState();

  const openAlert = (value, callback) => {
    setAlertValue({ value, callback });
  };

  const closeAlert = (data, callback) => {
    setAlertValue();
  };
  return { alertValue, openAlert, closeAlert };
};

export default useAlert;
