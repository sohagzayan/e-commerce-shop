import { Box, Button, Container, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import coverImage from "../.././assets/bg-image-5.jpg";

const NewsLatterWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${coverImage})`,
  borderRadius: "8px",
  width: "100%",
  height: "100%",
  padding: "100px 107px 85px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

const WeeklyUpdate = () => {
  return (
    <Fragment>
      <Box sx={{ marginBottom: "50px" }}>
        <Container maxWidth="lg">
          <NewsLatterWrapper>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#3577F0",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                >
                  <i className="ri-mail-open-line"></i>
                </span>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    color: "#3577F0",
                    fontSize: "14px",
                  }}
                >
                  Newsletter
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "2.2rem",
                  color: "#292930",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Get weekly update
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "390px",
                    backgroundColor: "#fff",
                    height: "50px",
                    marginRight: "20px",
                    padding: "0 30px",
                    borderRadius: "6px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "56%",
                      left: "10%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <i
                      style={{ fontSize: "18px", color: "#4A4D53" }}
                      className="ri-mail-send-line"
                    ></i>
                  </span>
                  <input
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingLeft: "30px",
                      border: "none",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </Box>
                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "#292930",
                    textTransform: "capitalize",
                    padding: "15px 40px",
                    fontFamily: "Poppins",
                    transition: "all .3s ease",
                    ":hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "#292930",
                      transition: "all .3s ease",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </NewsLatterWrapper>
        </Container>
      </Box>
    </Fragment>
  );
};

export default WeeklyUpdate;
