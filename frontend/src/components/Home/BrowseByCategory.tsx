import { Box, Container, Typography } from "@mui/material";
import { Fragment } from "react";
import catePhone from "../../assets/elec-4.png";
import cateGaming from "../../assets/elec-8.png";
import cateComputer from "../../assets/elec-5.png";
import cateAsssi from "../../assets/elec-11.png";
import cateLaptop from "../../assets/elec-6.png";
import cateMonitor from "../../assets/elec-2.png";
import cateNetwork from "../../assets/elec-7.png";

const BrowseByCategory = () => {
  return (
    <Fragment>
      <Box
        sx={{
          marginTop: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                //   justifyContent: "center",
                fontSize: "13px",
                fontFamily: "Poppins",
                fontWeight: "600",
                width: "100%",
                textAlign: "center",
                color: "#FF497C",
              }}
            >
              <span
                style={{
                  backgroundColor: "#FF497C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  marginRight: "5px",
                  color: "#fff",
                  borderRadius: "50%",
                }}
              >
                <i className="ri-price-tag-3-line"></i>
              </span>
              Categories
            </Typography>
            <Typography
              sx={{
                color: "#292930",
                fontSize: "2.2rem",
                fontFamily: "Poppins",
                fontWeight: "500",
                marginTop: "10px",
              }}
            >
              Browse by Category
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={catePhone} alt="phone" />
                <h6 className="cat-title">Phones</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateComputer} alt="phone" />
                <h6 className="cat-title">Computers</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateAsssi} alt="phone" />
                <h6 className="cat-title">Accessories</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateLaptop} alt="phone" />
                <h6 className="cat-title">Laptops</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateMonitor} alt="phone" />
                <h6 className="cat-title">Monitors</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateNetwork} alt="phone" />
                <h6 className="cat-title">Networking</h6>
              </a>
            </Box>
            <Box className="categrie-product">
              <a href="/shopping">
                <img className="img-fluid" src={cateGaming} alt="phone" />
                <h6 className="cat-title">PC Gaming</h6>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default BrowseByCategory;
