import { useEffect, useState } from "react";

const useDate = (data) => {
  const [value, setValue] = useState(data.value);
  const [bulanFullArr, setBulanFullArr] = useState([
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]);
  const [bulanHalfArr, setBulanHalfArr] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ]);

  const [arrayTanggal, setArrayTanggal] = useState();

  const addZero = (param) => {
    return param.toString().length > 1 ? param : "0" + param;
  };

  const formatDateToForm = (param) => {
    let d, dd, mm, yyyy, result;
    d = new Date(param);
    dd = d.getDate();
    mm = d.getMonth() + 1;
    yyyy = d.getFullYear();
    result = addZero(dd) + "/" + addZero(mm) + "/" + yyyy;
    return result.toString();
  };

  const getFullNameMonth = (param) => bulanFullArr[param - 1];

  const getValueArrayTanggal = () => {
    const { dd, mm, yyyy } = value;
    let startDate = new Date(yyyy, mm - 1, 1);
    let startDay = startDate.getDay();
    let oneDay = 24 * 60 * 60 * 1000;
    let result = [];

    for (let i = 0; i < 35; i++) {
      let value1 = startDate - startDay * oneDay + oneDay * i;
      let value = new Date(value1);
      let tgl = value.getDate();
      let bln = value.getMonth() + 1;
      let thn = value.getFullYear();
      let minggu = value.getDay() == 0 ? "true" : "false";
      let active = tgl == dd && bln == mm && thn == yyyy ? "true" : "false";

      result.push({ active, minggu, tgl, bln, thn });
    }
    setArrayTanggal(result);
    return result;
  };

  const handleChange = (dd, mm, yyyy) => {
    setValue({ dd, mm, yyyy });
  };

  const handlePick = () => {
    let result = new Date(value.yyyy, value.mm - 1, value.dd);
    data.callback(data.name, result);
    data.close();
  };

  const handleReset = () => {
    let result = new Date();
    data.callback(data.name, result);
    data.close();
  };

  useEffect(() => {
    getValueArrayTanggal();
  }, [value]);

  return {
    value,
    arrayTanggal,
    handleChange,
    handlePick,
    handleReset,
    getFullNameMonth,
    formatDateToForm,
  };
};

export default useDate;
