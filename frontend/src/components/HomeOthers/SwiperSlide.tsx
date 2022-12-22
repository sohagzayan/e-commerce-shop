import { Box, Typography, Button } from "@mui/material";
import { SwiperSlide } from "swiper/react";

const Slide = () => {
  return (
    <SwiperSlide className="singleSlide1">
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "10%",
          transform: "translateY(-60%)",
          textAlign: "left",
        }}
      >
        <Typography variant="h2">
          For Everything <br /> and Everyone
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Even if your less into design and more into content strategy you may{" "}
          <br />
          find some redeeming value with, wait for it, dummy copy.
        </Typography>
        <Box>
          <Button sx={{ backgroundColor: "#2A61B4", color: "#fff" }}>
            TO SHOP
          </Button>
          <Button>READ MORE</Button>
        </Box>
      </Box>
    </SwiperSlide>
  );
};

export default Slide;
