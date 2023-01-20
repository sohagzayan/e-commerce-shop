import { Box, Typography, Grid, Container } from "@mui/material";
import { Fragment } from "react";
import image1 from "../../assets/service6.png";
import image2 from "../../assets/service7.png";
import image3 from "../../assets/service8.png";
import image4 from "../../assets/service9.png";
import image5 from "../../assets/service10.png";

const WhyUs = () => {
  return (
    <Fragment>
      <Box sx={{ margin: "100px 0" }}>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              <i className="ri-thumb-up-line"></i>
            </span>
            Why Us
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "30px",
              marginTop: "5px",
              fontWeight: "500",
              color: "#292930",
            }}
          >
            Why People Choose Us
          </Typography>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "6px",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #f1f1f1",
                  padding: "40px",
                }}
              >
                <img src={image1} alt="image1" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#292930",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Fast & Secure <br /> Delivery
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #f1f1f1",
                  padding: "40px",
                }}
              >
                <img src={image2} alt="image1" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#292930",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  100% Guarantee <br /> On Product
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #f1f1f1",
                  padding: "40px",
                }}
              >
                <img src={image3} alt="image1" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#292930",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  24 Hour Return <br /> Policy
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #f1f1f1",
                  padding: "40px",
                }}
              >
                <img src={image4} alt="image1" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#292930",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  24 Hour Return <br /> Policy
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "1px solid #f1f1f1",
                  padding: "40px",
                }}
              >
                <img src={image5} alt="image1" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#292930",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Next Level Pro <br /> Quality
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default WhyUs;
