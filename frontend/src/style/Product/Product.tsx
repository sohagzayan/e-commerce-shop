import { styled, Box } from "@mui/material";

/* Product -----------------*/
export const CardWrapper = styled(Box)(({ theme }) => ({}));
export const Span = styled(Box)(({ theme }) => ({
  backgroundColor: "#F6F7FB",
  borderRadius: "9px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
}));

export const TypographyOfferPrice = styled(Box)(({ theme }) => ({
  color: "#292930",
  fontSize: "1.2rem",
  fontWeight: "600",
  marginRight: "10px",
}));

export const TypographyOldPrice = styled(Box)(({ theme }) => ({
  color: "#d6d6d6",
  fontSize: "1.2rem",
  fontWeight: "600",
  textDecoration: "line-through",
  textDecorationThickness: "3px",
}));

export const CardContent = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: " center",
    alignItems: "center",
  },
}));

export const Button = styled("button")(({ theme }) => ({}));

export const DiscountRange = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "25px",
  right: "-20px",
  background: "#3577f0",
  fontWeight: "700",
  color: "#fff",
  borderRadius: "4px",
  boxShadow: "0 8px 16px 0 rgb(53 119 240 / 30%)",
  lineHeight: 1,
  padding: "6px 10px 5px",
  fontSize: "12px",
}));

/* Product Controllers-----------------*/
