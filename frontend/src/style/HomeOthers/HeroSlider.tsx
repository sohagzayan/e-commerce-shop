import { Box, Button, Typography, styled } from "@mui/material";

export const TypographyForDetails = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginTop: "20px",
  color: "#777",
  maxWidth: "500px",
  fontWeight: "400",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    maxWidth: "100%",
  },
}));

export const TypographyForTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3.6rem",
  maxWidth: "600px",
  fontWeight: "500",
  fontFamily: "Poppins",
  color: "#0F172A",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.8rem",
  },
}));

export const ButtonAuthorWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "25px",
  fontWeight: "500",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    // fontSize: "2.8rem",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
  },
}));

export const AuthorImages = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "40px ",
  marginRight: "5px ",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px ",
    marginTop: "20px ",
  },
}));

export const AuthorRatting = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px ",
  },
}));

export const SlideWrapper = styled(Box)(({ theme }) => ({
  //   padding: "0 100px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 40px",
  },
}));
