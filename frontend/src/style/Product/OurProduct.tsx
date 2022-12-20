import { Box, styled } from "@mui/material";

export const OurProductWraper = styled(Box)(({ theme }) => ({}));

export const Span = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "700",
  color: "#8C71DB",
  marginBottom: "10px",
}));

export const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#F6F7FB",
  color: "#777777",
  padding: "18px 50px",
  border: "none",
  fontWeight: "600",
  fontSize: "16px",
  borderRadius: "10px",
  cursor: "pointer",
}));
