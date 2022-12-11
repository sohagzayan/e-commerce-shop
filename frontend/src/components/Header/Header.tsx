import { ListItem, Badge, Grid, Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenuSidebar from "./MobileMenuSidebar";
import { NavLink } from "react-router-dom";

const HeaderBoxs = styled(Box)(({ theme }) => ({
  paddingBottom: "10px",
  paddingTop: "10px",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 60,
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  padding: "20px  10px",
  backgroundColor: "#fff",
  // boxShadow: "0 2px 10px 0 rgb(0 0 0 / 10%)",
  maxWidth: "1200px",
  position: "sticky",
  top: 0,
  left: 0,
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.down("md")]: {
    width: "92%",
  },
  margin: "0px auto",
  borderRadius: "10px",
}));

const HeaderLogo = styled("div")({
  display: "flex",
  alignItems: "center",
});

const HeaderMenuList = styled("div")(({ theme }) => ({
  display: "flex",
  fontSize: "16px",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeaderIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ListItemMenu = styled(ListItem)({
  cursor: "pointer",
});

const Span = styled("span")(({ theme }) => ({
  margin: "0 10px",
  color: "#292930",
  fontWeight: "300",
  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

const MenuHamberGer = styled("span")(({ theme }) => ({
  margin: "0 7px",
  color: "#292930",
  fontWeight: "300",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 2px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "130px",
    padding: "10px 0",
  },
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
              {/* <Typography
              fontWeight="700"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "22px",
                color: "#0053A8",
              }}
            >
              <ShoppingBagOutlinedIcon
                color="primary"
                sx={{ fontSize: "30px" }}
              />
              cTrade
            </Typography> */}
              <Image src={logo} alt="" />
            </HeaderLogo>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <HeaderMenuList>
              <ListItemMenu>
                <NavLink to="/">Home</NavLink>
              </ListItemMenu>
              <ListItemMenu>
                <NavLink to="/shop">Shop</NavLink>
              </ListItemMenu>
              <ListItemMenu>Pages</ListItemMenu>
              <ListItemMenu>About</ListItemMenu>
              <ListItemMenu>Blog</ListItemMenu>
              <ListItemMenu>Contact</ListItemMenu>
            </HeaderMenuList>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "end" }}>
            <HeaderIcons>
              <Span>
                <SearchIcon sx={{ fontSize: "22px" }} />
              </Span>
              <Span className="icon">
                <FavoriteBorderIcon sx={{ fontSize: "22px" }} />
              </Span>
              <Span>
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "22px" }} />
                </Badge>
              </Span>
              <Span>
                <AccountCircleOutlinedIcon sx={{ fontSize: "23px" }} />
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
