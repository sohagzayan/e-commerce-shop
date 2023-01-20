import { Box, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import serviceImage1 from "../../assets/service1.png";
import serviceImage2 from "../../assets/service2.png";
import serviceImage3 from "../../assets/service3.png";
import serviceImage4 from "../../assets/service4.png";

const Footer = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "enter",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              width={50}
              style={{ marginRight: "20px" }}
              src={serviceImage1}
              alt=""
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Fast & Secure Delivery
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#777",
                }}
              >
                Tell about your service.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              width={50}
              style={{ marginRight: "20px" }}
              src={serviceImage2}
              alt=""
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Money Back Guarantee
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#777",
                }}
              >
                Within 10 days.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              width={50}
              style={{ marginRight: "20px" }}
              src={serviceImage3}
              alt=""
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                24 Hour Return Policy
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#777",
                }}
              >
                No question ask.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              width={50}
              style={{ marginRight: "20px" }}
              src={serviceImage4}
              alt=""
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                }}
              >
                Pro Quality Support
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#777",
                }}
              >
                24/7 Live support.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          borderTop: "1px solid #f6f7fb",
          padding: "15px 0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Support
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "20px",
                    }}
                  >
                    685 Market Street, <br /> Las Vegas, LA 95820, United
                    States.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <i
                      style={{ marginRight: "4px" }}
                      className="ri-mail-open-line"
                    ></i>{" "}
                    example@domain.com
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <i
                      style={{ marginRight: "4px" }}
                      className="ri-phone-line"
                    ></i>{" "}
                    (+01) 850-315-5862
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Account
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    My Account
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Login / Register
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Cart
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Wishlist
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Shop
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Quick Link
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Terms Of Use
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    FAQ
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Contact
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Contact
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Download App
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    Save $3 With App & New User only
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "5px",
                    }}
                  >
                    <img
                      src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/qr.png"
                      alt=""
                    />
                    <Box>
                      <img
                        src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/app-store.png"
                        alt=""
                      />
                      <img
                        src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/play-store.png"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 0",
              borderTop: "1px solid #f6f7fb",
            }}
          >
            <Box>
              <i
                style={{ color: "#777", marginRight: "10px", fontSize: "18px" }}
                className="ri-facebook-fill"
              ></i>
              <i
                style={{ color: "#777", marginRight: "10px", fontSize: "18px" }}
                className="ri-instagram-line"
              ></i>
              <i
                style={{ color: "#777", marginRight: "10px", fontSize: "18px" }}
                className="ri-twitter-fill"
              ></i>
              <i
                style={{ color: "#777", marginRight: "10px", fontSize: "18px" }}
                className="ri-linkedin-fill"
              ></i>
              <i
                style={{ color: "#777", marginRight: "10px", fontSize: "18px" }}
                className="ri-discord-fill"
              ></i>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", color: "#777" }}>
                © 2022. All rights reserved by Axilthemes.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "14px", color: "#777" }}>
                Accept For
              </Typography>
              <img
                style={{ marginLeft: "10px" }}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-1.png"
                alt=""
              />
              <img
                style={{ marginLeft: "10px" }}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-2.png"
                alt=""
              />
              <img
                style={{ marginLeft: "10px" }}
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-5.png"
                alt=""
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Footer;
