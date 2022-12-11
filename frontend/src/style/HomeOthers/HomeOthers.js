import { Box, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
  minHeight: "550px",
  overflow: "hidden",
  padding: "100px 0",
  position: "relative",
  zIndex: "20",
  backgroundColor: "#f9f3f0",
}));

export const Span = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#FF497C",
  fontWeight: "700",
  fontSize: "15px",
}));

export const HeroInner = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const Li = styled("li")(({ theme }) => ({
  position: "absolute",
  bottom: "-60%",
  left: "0",
  width: "100%",
  height: "auto",
  zIndex: "-1",
}));
