import { Outlet } from "react-router-dom";
import useNav from "../../hooks/useNav";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  const { show, toggleNav } = useNav();
  return (
    <>
      <Navbar toggleNav={toggleNav} />
      <Sidebar show={show} toggleNav={toggleNav} />
      <Outlet />
    </>
  );
};

export default Layout;
