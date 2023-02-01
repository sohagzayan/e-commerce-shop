import { Box, styled } from "@mui/material";

export const ListElement = styled("li")(({ theme }) => ({
  marginRight: "50px",
  fontWeight: "600",
  fontSize: "16px",
  cursor: "pointer",
  ":last-child": {
    marginRight: 0,
  },
  [theme.breakpoints.down("md")]: {
    marginRight: "20px",
  },
}));

export const BottomHeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "5rem",
  padding: "4px 0",
  color: "rgb(51 65 85/1)",
}));

export const BottomHeaderRoot = styled(Box)(({ theme }) => ({
  // [theme.breakpoints.down("md")]: {
  //   padding: "20px 0",
  // },
}));

export const UsdLanOptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MenuHamburger = styled("span")(({ theme }) => ({
  margin: "0 6px",
  color: "#292930",
  fontWeight: "300",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 0px",
  },
}));

export const IconListWrapper = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const IconListElement = styled("li")(({ theme }) => ({
  fontSize: "15px",
  cursor: "pointer",
  color: "#333",
  transition: "all .3s ease-in",
  marginLeft: "20px",
  ":hover": {
    color: "rgba(51,51,51,.6)",
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "130px",
  },
}));
