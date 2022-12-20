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
}));

export const BottomHeaderRoot = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px 0",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 0",
  },
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
  marginLeft: "25px",
  fontSize: "15px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "130px",
  },
}));
