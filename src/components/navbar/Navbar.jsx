import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SNavbar, SNavbarBrand, SNavbarButton } from "./Styles";

const Navbar = ({ toggleNav }) => {
  return (
    <SNavbar>
      <SNavbarButton onClick={toggleNav}>
        <HiMenu />
      </SNavbarButton>
      <SNavbarBrand to="/">
        <h1>Jeep Apps</h1>
      </SNavbarBrand>
    </SNavbar>
  );
};

export default Navbar;
