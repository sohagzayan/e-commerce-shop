import React from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import logo from "../../assets/logo.png";
import UsdAndLan from "./UsdAndLan";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";

const SearchButton = styled("button")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "4%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "transparent",
  border: "none",
  [theme.breakpoints.down("md")]: {
    left: "6%",
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  width: "60%",
  height: "40px",
  borderRadius: "6px",
  border: "1px solid #d4d4d4",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const InputField = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "6px",
  border: "none",
  marginLeft: "55px",
  marginRight: "20px",
  backgroundColor: "transparent",
  outline: "none",
  color: "#292930",
  fontSize: "14px",
  fontWeight: "600",
}));

const IconListWrapper = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const IconListElement = styled("li")(({ theme }) => ({
  marginLeft: "25px",
  fontSize: "15px",
  cursor: "pointer",
}));

const UsdLanOptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const TopHeader = () => {
  const usd = ["USD", "AUD", "EUR"];
  const lan = ["EN", "ARB", "SPN"];
  return (
    <Box sx={{ borderBottom: "1px solid #f0f0f0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0px",
          }}
        >
          <UsdLanOptionWrapper>
            <UsdAndLan menu={usd} />
            <UsdAndLan menu={lan} />
          </UsdLanOptionWrapper>
          <Box>
            <img src={logo} alt="logo" />
          </Box>
          <IconListWrapper>
            <IconListElement>
              <SearchIcon sx={{ fontSize: "23px", color: "#80808d" }} />
            </IconListElement>
            <IconListElement>
              <FavoriteBorderIcon sx={{ fontSize: "23px", color: "#80808d" }} />
            </IconListElement>
            <IconListElement>
              <ShoppingCartOutlinedIcon
                sx={{ fontSize: "23px", color: "#80808d" }}
              />
            </IconListElement>
            <IconListElement>
              <ContactsIcon sx={{ fontSize: "23px", color: "#80808d" }} />
            </IconListElement>
          </IconListWrapper>
          {/* <SearchBox>
            <SearchButton>
              <SearchIcon sx={{ fontSize: "20px", color: "#292930" }} />
            </SearchButton>
            <InputField placeholder="What are you looking for..." type="text" />
          </SearchBox> */}
        </Box>
      </Container>
    </Box>
  );
};

export default TopHeader;
