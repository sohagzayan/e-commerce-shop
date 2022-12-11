import { Badge, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenuSidebar from "./MobileMenuSidebar";
import { Link, NavLink } from "react-router-dom";
import userLove from "../../assets/icon/003-heart.png";
import userShooping from "../../assets/icon/shopping-cart.png";
import userSearch from "../../assets/icon/004-search-interface-symbol.png";
import userAccount from "../../assets/icon/user.png";
import {
  HeaderBoxs,
  HeaderIcons,
  HeaderLogo,
  HeaderWrapper,
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
            <Ul>
              {headerMenu.map((menu) => (
                <Li>
                  <Link to={menu.path}>{menu.name}</Link>
                </Li>
              ))}
            </Ul>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "end" }}>
            <HeaderIcons>
              <Span>
                {/* <SearchIcon sx={{ fontSize: "22px" }} /> */}
                <img width={25} src={userSearch} alt="" />
              </Span>
              <Span className="icon">
                {/* <FavoriteBorderIcon sx={{ fontSize: "22px" }} /> */}
                <img width={25} src={userLove} alt="" />
              </Span>
              <Span>
                <Badge badgeContent={2} color="primary">
                  <img width={25} src={userShooping} alt="" />
                  {/* <ShoppingCartOutlinedIcon sx={{ fontSize: "22px" }} /> */}
                </Badge>
              </Span>
              <Span>
                {/* <AccountCircleOutlinedIcon sx={{ fontSize: "23px" }} /> */}
                <img width={25} src={userAccount} alt="" />
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
