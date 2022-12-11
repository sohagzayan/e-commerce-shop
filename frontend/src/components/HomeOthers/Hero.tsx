import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import clockImage from "../../assets/product-39.png";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import shape from "../../assets/shape.png";
import {
  HeroInner,
  HeroWrapper,
  Li,
  Span,
} from "../../style/HomeOthers/HomeOthers";

const Hero = () => {
  return (
    <HeroWrapper>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
        }}
      >
        <HeroInner>
          <Box>
            <Span sx={{ marginBottom: "15px" }}>
              <WhatshotIcon
                sx={{
                  marginRight: "5px",
                  backgroundColor: "#FF497C",
                  borderRadius: "30px",
                  color: "#fff",
                  padding: "3px",
                }}
              />
              Hot Deal In This Week
            </Span>
            <Typography
              sx={{ fontSize: "3.5rem", fontWeight: "700", color: "#292930" }}
            >
              Let's Create Your Own Style
            </Typography>
            <Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  backgroundColor: "#fff",
                  color: "#292930",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  boxShadow: "none",
                  padding: "15px 40px",
                  transition: "all .3s ease-in",

                  "&:hover": {
                    backgroundColor: "#fff",
                    transform: "scale(1.1)",
                    transition: "all .3s ease-in",
                    boxShadow: "none",
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box>
            <img src={clockImage} alt="" />
          </Box>
        </HeroInner>

        <Li>
          <img src={shape} alt="" />
        </Li>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
