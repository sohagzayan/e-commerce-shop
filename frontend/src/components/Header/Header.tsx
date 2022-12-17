import { Badge, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenuSidebar from "./MobileMenuSidebar";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HeaderBoxs,
  HeaderIcons,
  HeaderLogo,
  HeaderWrapper,
  HeaderMenuList,
  Image,
  MenuHamberGer,
  Span,
} from "../../style/Header/Header";
import { headerMenu } from "../../util/HeaderMenu";

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Li = styled("li")(({ theme }) => ({
  margin: "0 20px",
  fontSize: "16px",
  color: "#292930",
  fontWeight: "600",
}));

const Header = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  console.log(isOpenSideBar);
  const [scrollCount, setScrollCount] = useState(0);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollCount(window.scrollY);
      // console.log(window.scrollY);
    });
  }, []);

  return (
    <HeaderBoxs
      style={{ backgroundColor: scrollCount <= 200 ? "#f9f3f0" : "" }}
    >
      <HeaderWrapper>
        <Grid container>
          <Grid item xs={3}>
            <HeaderLogo>
              <Image src={logo} alt="" />
            </HeaderLogo>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderMenuList>
              <Ul>
                {headerMenu.map((menu) => (
                  <li className="">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "headerMenu active" : "headerMenu"
                      }
                      to={menu.path}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </Ul>
            </HeaderMenuList>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "end" }}>
            <HeaderIcons>
              <Span>
                <SearchIcon sx={{ fontSize: "23px", color: "#80808d" }} />
              </Span>
              <Span className="icon">
                <FavoriteBorderIcon
                  sx={{ fontSize: "23px", color: "#80808d" }}
                />
              </Span>
              <Span>
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartOutlinedIcon
                    sx={{ fontSize: "23px", color: "#80808d" }}
                  />
                </Badge>
              </Span>
              <Span>
                <ContactsIcon sx={{ fontSize: "23px", color: "#80808d" }} />
              </Span>
              <MenuHamberGer>
                <Hamburger
                  easing="ease-in"
                  size={26}
                  toggled={isOpenSideBar}
                  toggle={setIsOpenSideBar}
                />
              </MenuHamberGer>
            </HeaderIcons>
          </Grid>
        </Grid>
        <MobileMenuSidebar
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
        />
      </HeaderWrapper>
    </HeaderBoxs>
  );
};

export default Header;
