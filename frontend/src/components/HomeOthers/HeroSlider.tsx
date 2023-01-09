import { Typography, Button, Box, Container } from "@mui/material";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import "swiper/css/pagination";

import { authorImages, heroContent } from "../../util/HeroContent";
import {
  AuthorImages,
  AuthorRatting,
  ButtonAuthorWrapper,
  SlideWrapper,
  TypographyForDetails,
  TypographyForTitle,
} from "../../style/HomeOthers/HeroSlider";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {heroContent.map((info, index) => (
          <SwiperSlide key={index} className={info.class}>
            {({ isActive }) => (
              <Container maxWidth="lg">
                <SlideWrapper>
                  <motion.div>
                    <Box>
                      <motion.div
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : 2000,
                          transition: {
                            duration: 0.6,
                            delay: 0.3,
                          },
                        }}
                      >
                        <TypographyForTitle>{info.title}</TypographyForTitle>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : 2000,
                          transition: {
                            duration: 0.6,
                            delay: 1,
                          },
                        }}
                      >
                        <TypographyForDetails>
                          {info.describe}
                        </TypographyForDetails>
                      </motion.div>
                      <ButtonAuthorWrapper>
                        <motion.div
                          initial={{ opacity: 0, y: -1000 }}
                          animate={{
                            opacity: isActive ? 1 : 1,
                            x: isActive ? 0 : 2000,
                            transition: {
                              duration: 0.6,
                              delay: 1,
                              type: "spring",
                              damping: 10,
                            },
                          }}
                        >
                          <Button
                            variant="contained"
                            size="large"
                            startIcon={<ShoppingCartOutlinedIcon />}
                            sx={{
                              backgroundColor: "rgb(15,23,42,1)",
                              color: "#fff",
                              textTransform: "capitalize",
                              fontWeight: "700",
                              boxShadow: "none",
                              padding: "15px 40px",
                              transition: "all .3s ease-in",
                              "&:hover": {
                                transform: "scale(1.1)",
                                backgroundColor: "rgb(15,23,42,1)",
                                transition: "all .3s ease-in",
                                boxShadow: "none",
                              },
                            }}
                          >
                            Shop Now
                          </Button>
                        </motion.div>
                        <motion.div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          initial={{ opacity: 0, y: -1000 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : 2000,
                            transition: {
                              duration: 0.6,
                              delay: 1.3,
                              type: "spring",
                              damping: 10,
                            },
                          }}
                        >
                          <AuthorImages>
                            {authorImages.map((url, index) => (
                              <img
                                key={index}
                                style={{ marginLeft: "-20px" }}
                                src={url}
                                alt="author1"
                              />
                            ))}
                          </AuthorImages>
                          <AuthorRatting>
                            <Box>
                              <StarRateIcon
                                sx={{ color: "#FFA800", fontSize: "16px" }}
                              />
                              <StarRateIcon
                                sx={{ color: "#FFA800", fontSize: "16px" }}
                              />
                              <StarRateIcon
                                sx={{ color: "#FFA800", fontSize: "16px" }}
                              />
                              <StarRateIcon
                                sx={{ color: "#FFA800", fontSize: "16px" }}
                              />
                              <StarBorderIcon
                                sx={{ color: "#FFA800", fontSize: "16px" }}
                              />
                            </Box>
                            <Typography sx={{ fontSize: "12px" }}>
                              100+ Reviews
                            </Typography>
                          </AuthorRatting>
                        </motion.div>
                      </ButtonAuthorWrapper>
                    </Box>
                  </motion.div>
                </SlideWrapper>
              </Container>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
