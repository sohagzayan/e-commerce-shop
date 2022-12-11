import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#ff497c",
  boxShadow: "0 16px 32px 0 rgb(0 0 0 / 6%)",
  color: "#fff",
  border: "none",
  lineHeight: "39px",
  padding: " 0 18px",
  display: "block",
  borderRadius: "4px",
  fontWeight: "700",
  cursor: "pointer",
}));

export const ProductControllerWrapper = styled(Box)(({ theme }) => ({}));

export const Icon = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  lineHeight: "51px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  textAlign: "center",
  boxShadow: "0 16px 32px 0 rgb(0 0 0 / 6%)",
  color: "#292930",
  fontSize: "12px",
}));
