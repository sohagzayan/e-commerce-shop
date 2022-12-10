import { ListItem, Badge, Grid, Box, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Sling as Hamburger } from "hamburger-react";
import MobileMenu from "../components/MobileMenu";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";

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

const PaperEdited = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeaderTwo = () => {
  const [openDrower, setOpenDrower] = React.useState(false);
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
              <ListItemMenu>Home</ListItemMenu>
              <ListItemMenu>Shop</ListItemMenu>
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
                  toggled={openDrower}
                  toggle={setOpenDrower}
                />
              </MenuHamberGer>
            </HeaderIcons>
          </Grid>
        </Grid>
        <MobileMenu openDrower={openDrower} setOpenDrower={setOpenDrower} />
      </HeaderWrapper>
    </HeaderBoxs>
  );
};

export default HeaderTwo;
