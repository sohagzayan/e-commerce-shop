import { styled } from "@mui/material";
import { Box, ListItem, Paper } from "@mui/material";

export const HeaderBoxs = styled(Box)(({ theme }) => ({
  paddingBottom: "10px",
  paddingTop: "10px",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 60,
}));

export const HeaderWrapper = styled(Box)(({ theme }) => ({
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

export const HeaderLogo = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const HeaderMenuList = styled("div")(({ theme }) => ({
  display: "flex",
  fontSize: "16px",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const HeaderIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ListItemMenu = styled(ListItem)({
  cursor: "pointer",
});

export const Span = styled("span")(({ theme }) => ({
  margin: "0 10px",
  color: "#292930",
  fontWeight: "300",
  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

export const MenuHamberGer = styled("span")(({ theme }) => ({
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

export const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "130px",
    padding: "10px 0",
  },
}));

/* Header Two Styled */

export const PaperEdited = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
