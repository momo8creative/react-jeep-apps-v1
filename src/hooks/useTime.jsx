import { useEffect, useState } from "react";

const useTime = (data) => {
  const [value, setValue] = useState(data.value);
  const [arrayValue, setArrayValue] = useState();

  const handleChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setValue((current) => ({ ...current, [name]: value }));
  };

  const handlePick = () => {
    let result = new Date(0, 0, 0, value.hh, value.mm);
    data.callback(data.name, result);
    data.close();
  };

  const handleReset = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm1 = d.getMinutes();
    let mm = parseInt(Math.round(mm1 / 10) + "0");
    let result = new Date(0, 0, 0, hh, mm);
    data.callback(data.name, result);
    data.close();
  };

  const getArray = () => {
    let jam = [];
    let menit = [];

    for (let i = 0; i < 24; i++) {
      jam.push(i);
    }

    for (let i = 0; i < 6; i++) {
      menit.push(i * 10);
    }
    setArrayValue({ hh: jam, mm: menit });
    return { jam, menit };
  };

  useEffect(() => {
    getArray();
  }, []);

  return { value, arrayValue, handleChange, handlePick, handleReset };
};

export default useTime;
