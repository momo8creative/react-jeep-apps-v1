import {} from "react";

const DataMenus = (toggleNav) => {
  const menu = [
    [
      {
        label: "Pemakaian",
        icon: "",
        to: "/pemakaian",
        onClick: toggleNav,
      },
      {
        label: "Tambah Pemakaian",
        icon: "",
        to: "/pemakaian/add",
        onClick: toggleNav,
      },
    ],
  ];
  return { menu };
};

export default DataMenus;
