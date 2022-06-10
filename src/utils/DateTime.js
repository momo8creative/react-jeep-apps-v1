export const addZero = (param) => {
  return param.toString().length > 1 ? param : "0" + param;
};

export const formatDateToForm = (param) => {
  let d, dd, mm, yyyy, result;
  if (!param) return "";

  d = new Date(param);
  if (d == "Invalid Date") return param;

  dd = d.getDate();
  mm = d.getMonth() + 1;
  yyyy = d.getFullYear();
  result = addZero(dd) + "/" + addZero(mm) + "/" + yyyy;
  return result.toString();
};

export const formatTimeToForm = (param) => {
  let d, hh, mm, result;
  if (!param) return "";

  d = new Date(param);
  if (d == "Invalid Date") return param;

  hh = d.getHours();
  mm = d.getMinutes();
  result = addZero(hh) + ":" + addZero(mm);
  return result.toString();
};

export const getDate = (date) => {
  let d = new Date(date);
  return d.getDate();
};

const halfBulan = [
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
];

export const getHalfMonth = (date) => {
  let d = new Date(date);
  return halfBulan[d.getMonth()];
};

export const getYear = (date) => {
  let d = new Date(date);
  return d.getFullYear();
};

export const getDateTimeAgo = (date) => {
  let now = new Date();
  let current = new Date(date);
  let range = (now - current) / 1000;

  let menit = 60;
  let jam = menit * 60;
  let hari = jam * 24;
  let bulan = hari * 30;
  let tahun = bulan * 12;

  if (range / menit < 60) {
    return Math.floor(range / menit) + " menit";
  } else if (range / jam < 24) {
    return Math.floor(range / jam) + " jam";
  } else if (range / hari < 30) {
    return Math.floor(range / hari) + " hari";
  } else if (range / bulan < 30) {
    return Math.floor(range / bulan) + " bulan";
  } else {
    return Math.floor(range / tahun) + " tahun";
  }
};
