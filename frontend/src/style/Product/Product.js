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
  color: "#22C55E",
  border: "2px solid #22C55E",
  padding: "3px 13px",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "500",
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
  top: "10px",
  left: "10px",
  background: "#fff",
  fontWeight: "700",
  color: "#343E4E",
  borderRadius: "15px",
  boxShadow: "2px 8px 40px rgb(0 0 0 / 8%)",
  lineHeight: 1,
  padding: "6px 14px 5px",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
}));

/* Product Controllers-----------------*/
