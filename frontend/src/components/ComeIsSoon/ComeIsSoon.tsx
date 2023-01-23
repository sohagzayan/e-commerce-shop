import { Box } from "@mui/material";
import { Fragment } from "react";
import HeaderTwo from "../Header/HeaderTwo";
import Footer from "../Home/Footer";

const ComeIsSoon = () => {
  return (
    <Box sx={{ overflow: "clip" }}>
      <HeaderTwo />
      <Box
        sx={{
          fontSize: "3rem",
          fontFamily: "Poppins",
          fontWeight: "500",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Come in Soon
      </Box>
      <Footer />
    </Box>
  );
};

export default ComeIsSoon;
