import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import poster from "../../assets/poster-03.png";

const DontMiss = () => {
  return (
    <Fragment>
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#F6F7FB",
            padding: "65px 80px",
            marginTop: "150px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                paddingLeft: "15px",
                paddingRight: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: { md: "start", xs: "center" },
                flexDirection: "column",
              }}
            >
              <Box sx={{ marginBottom: "10px" }}>
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
                    <i className="ri-headphone-line"></i>
                  </span>
                  Don’t Miss!!
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "15px" }}>
                <Typography
                  sx={{
                    fontSize: { md: "48px", xs: "26x" },
                    fontFamily: "Poppins",
                    color: "#292930",
                    fontWeight: "500",
                    marginBottom: "15px",
                    textAlign: { md: "left", xs: "center" },
                  }}
                >
                  Enhance Your Music Experience
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { md: "start", xs: "center" },
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    sx={{
                      color: "#292930",
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginRight: "20px",
                    }}
                  >
                    0
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        color: "#777",
                        fontWeight: "500",
                      }}
                    >
                      Day
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "#292930",
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginRight: "20px",
                    }}
                  >
                    00
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        color: "#777",
                        fontWeight: "500",
                      }}
                    >
                      Hrs
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "#292930",
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginRight: "20px",
                    }}
                  >
                    00
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        color: "#777",
                        fontWeight: "500",
                      }}
                    >
                      Min
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "#292930",
                      fontSize: "22px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginRight: "20px",
                    }}
                  >
                    00
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        color: "#777",
                        fontWeight: "500",
                      }}
                    >
                      Sec
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { md: "start", xs: "center" },
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#0d6efd",
                      color: "#fff",
                      fontFamily: "Poppins",
                      padding: "15px 35px",
                      transition: "all .3s ease-in",
                      ":hover": {
                        backgroundColor: "#0d6efd",
                        transition: "all .3s ease-in",
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    Check it Out
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                position: "relative",
                marginTop: { md: "-160px", xs: "50px" },
                paddingLeft: "15px",
                paddingRight: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "58.33333333%",
              }}
            >
              <img style={{ maxWidth: "100%" }} src={poster} alt="" />
              <div className="music-singnal ">
                <div className="item-circle circle-1"></div>
                <div className="item-circle circle-2"></div>
                <div className="item-circle circle-3"></div>
                <div className="item-circle circle-4"></div>
                <div className="item-circle circle-5"></div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default DontMiss;
