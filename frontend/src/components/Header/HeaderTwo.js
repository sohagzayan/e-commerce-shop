import { Badge, Grid, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenu from "./MobileMenuSidebar";
import { NavLink } from "react-router-dom";
import {
  HeaderBoxs,
  HeaderIcons,
  HeaderLogo,
  HeaderMenuList,
  HeaderWrapper,
  Image,
  ListItemMenu,
  MenuHamberGer,
  PaperEdited,
  Span,
} from "../../style/Header/Header";

const HeaderTwo = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollCount(window.scrollY);
      // console.log(window.scrollY);
    });
  }, []);

  return (
    <HeaderBoxs>
      <HeaderWrapper>
        <Grid container>
          <Grid item xs={2} md={3}>
            <HeaderLogo>
              <Image src={logo} alt="" />
            </HeaderLogo>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", justifyContent: "center" }}>
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
          <Grid
            item
            xs={5}
            md={4}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <HeaderIcons>
              <Box className="searForm">
                <PaperEdited
                  component="form"
                  sx={{
                    p: "0px 2px",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "none",
                    border: "1px solid #f0f0f0",
                    //   width: 400,
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="What you are looking for?"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  ></IconButton>
                </PaperEdited>
              </Box>

              <Span className="searchIcon">
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
        <MobileMenu
          isOpenSideBar={isOpenSideBar}
          setIsOpenSideBar={setIsOpenSideBar}
        />
      </HeaderWrapper>
    </HeaderBoxs>
  );
};

export default HeaderTwo;
