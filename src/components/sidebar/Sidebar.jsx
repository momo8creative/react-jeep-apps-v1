import { HiX } from "react-icons/hi";
import DataMenus from "../../datas/DataMenus";
import {
  SMenuItem,
  SMenuLink,
  SNavMenu,
  SSidebar,
  SSidebarButton,
} from "./Styles";

const Sidebar = ({ show, toggleNav }) => {
  const { menu } = DataMenus(toggleNav);
  return (
    <SSidebar show={show}>
      <SSidebarButton onClick={toggleNav}>
        <HiX />
      </SSidebarButton>
      <SNavMenu show={show}>
        {menu.map((m, i) => (
          <SMenuItem key={i}>
            {m.map(({ label, icon, ...props }, i) => (
              <SMenuLink key={i} {...props}>
                {icon}
                <h3>{label}</h3>
              </SMenuLink>
            ))}
          </SMenuItem>
        ))}
      </SNavMenu>
    </SSidebar>
  );
};

export default Sidebar;
