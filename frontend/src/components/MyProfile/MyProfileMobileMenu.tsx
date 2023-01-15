import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MyProfileMobileMenu = ({ menu }: any) => {
  return (
    <Fragment>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "innerMenuMobile active" : "innerMenuMobile"
          }
          to={menu.path}
        >
          <i
            style={{ marginRight: "5px", fontSize: "15px" }}
            className={menu.icon}
          ></i>
          {menu.name}
        </NavLink>
      </li>
    </Fragment>
  );
};
export default MyProfileMobileMenu;
