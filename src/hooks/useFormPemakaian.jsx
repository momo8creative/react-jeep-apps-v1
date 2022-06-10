import { useEffect, useMemo, useState } from "react";
import { formatDateToForm, formatTimeToForm } from "../utils/DateTime";

const useFormPemakaian = (data, callback) => {
  const [values, setValues] = useState(() => {
    data["created_on"] = null;
    data["created_by"] = null;
    return data;
  });
  const [errors, setErrors] = useState();

  const handleChange = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newValue = values;
    newValue["tgl_berangkat"] = formatDateToForm(newValue["tgl_berangkat"]);
    newValue["tgl_kembali"] = formatDateToForm(newValue["tgl_kembali"]);
    newValue["jam_berangkat"] = formatTimeToForm(newValue["jam_berangkat"]);
    newValue["jam_kembali"] = formatTimeToForm(newValue["jam_kembali"]);
    callback(newValue);
  };

  const calcluteSummary = useMemo(() => {
    let value = values["km_akhir"] - values["km_awal"];
    if (!value) return;
    setValues((current) => ({ ...current, km_pemakaian: value }));
  }, [values["km_awal"], values["km_akhir"]]);

  useEffect(() => {
    calcluteSummary;
  }, [values["km_awal"], values["km_akhir"]]);

  // useEffect(() => {
  //   console.log("form init value =>", values);
  // }, []);

  return { values, errors, handleChange, handleSubmit };
};

export default useFormPemakaian;
