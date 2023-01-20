import { FocusTrap } from "@mui/base";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import HeaderTwo from "../Header/HeaderTwo";
import Footer from "../Home/Footer";
import notFoundPage from "../../assets/notFound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Box>
        <Box sx={{ overflowX: "clip " }}>
          <HeaderTwo />
          <Box
            sx={{
              padding: "20px 0",
              marginY: "50px",
              height: "100%",
            }}
          >
            <Container maxWidth="lg">
              <Grid container>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    // alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // justifyContent: "center",
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
                      <i className="ri-information-line"></i>
                    </span>
                    Oops! Somthing's missing.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "2.2rem",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      color: "#292930",
                      marginTop: "10px",
                    }}
                  >
                    Page not found
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      color: "#777",
                      marginTop: "10px",
                    }}
                  >
                    It seems like we dont find what you searched. The page you{" "}
                    <br />
                    were looking for doesn't exist, isn't available loading{" "}
                    <br />
                    incorrectly.
                  </Typography>
                  <Button
                    onClick={() => navigate("/")}
                    sx={{
                      display: "inline-flex",
                      width: "200px",
                      alignItems: "center",
                      marginTop: "30px",
                      textTransform: "capitalize",
                      backgroundColor: "#FF497C",
                      color: "#fff",
                      padding: "12px 10px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      transition: "all .3s ease-in",
                      ":hover": {
                        backgroundColor: "#FF497C",
                        transform: "scale(1.1)",
                        transition: "all .3s ease-in",
                      },
                    }}
                  >
                    Back To Home{" "}
                    <i
                      style={{ marginLeft: "10px" }}
                      className="ri-arrow-right-line"
                    ></i>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <img width="100%" src={notFoundPage} alt="notFound" />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Fragment>
  );
};

export default NotFound;
