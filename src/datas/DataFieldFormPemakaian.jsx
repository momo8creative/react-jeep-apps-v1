import { formatDateToForm, formatTimeToForm } from "../utils/DateTime";

const DataFieldFormPemakaian = (
  values,
  errors,
  handleChange,
  openDatePicker,
  openTimePicker
) => {
  const formField = [
    {
      label: "No SPJ",
      type: "text",
      name: "no_spj",
      value: values["no_spj"],
      onChange: (e) => handleChange(e.target.name, e.target.value),
    },
    {
      title: "Keberangkatan",
      list: [
        {
          label: "Tanggal",
          type: "text",
          readOnly: true,
          name: "tgl_berangkat",
          value: formatDateToForm(values["tgl_berangkat"]),
          onChange: (e) => handleChange(e.target.name, e.target.value),
          onClick: (e) => openDatePicker(handleChange, e),
        },
        {
          label: "Jam",
          type: "text",
          readOnly: true,
          name: "jam_berangkat",
          value: formatTimeToForm(values["jam_berangkat"]),
          onChange: (e) => handleChange(e.target.name, e.target.value),
          onClick: (e) => openTimePicker(handleChange, e),
        },
      ],
    },
    {
      title: "Kepulangan",
      list: [
        {
          label: "Tanggal",
          type: "text",
          readOnly: true,
          name: "tgl_kembali",
          value: formatDateToForm(values["tgl_kembali"]),
          onChange: (e) => handleChange(e.target.name, e.target.value),
          onClick: (e) => openDatePicker(handleChange, e),
        },
        {
          label: "Jam",
          type: "text",
          readOnly: true,
          name: "jam_kembali",
          value: formatTimeToForm(values["jam_kembali"]),
          onChange: (e) => handleChange(e.target.name, e.target.value),
          onClick: (e) => openTimePicker(handleChange, e),
        },
      ],
    },
    {
      label: "Tujuan",
      type: "text",
      name: "tujuan",
      value: values["tujuan"],
      onChange: (e) => handleChange(e.target.name, e.target.value),
    },
    {
      label: "Keperluan",
      type: "text",
      name: "keperluan",
      value: values["keperluan"],
      onChange: (e) => handleChange(e.target.name, e.target.value),
    },
    {
      title: "Kilometer",
      list: [
        {
          label: "Awal",
          type: "number",
          name: "km_awal",
          readOnly: true,
          value: values["km_awal"],
          onChange: (e) => handleChange(e.target.name, e.target.value),
        },
        {
          label: "Akhir",
          type: "number",
          name: "km_akhir",
          value: values["km_akhir"],
          onChange: (e) => handleChange(e.target.name, e.target.value),
        },
        {
          label: "Jumlah",
          type: "number",
          name: "km_pemakaian",
          readOnly: true,
          value: values["km_pemakaian"],
          onChange: (e) => handleChange(e.target.name, e.target.value),
        },
      ],
    },
  ];
  return { formField };
};

export default DataFieldFormPemakaian;
