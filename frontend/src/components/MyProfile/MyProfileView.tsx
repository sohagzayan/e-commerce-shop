import { Box, Button, Grid, styled, Typography } from "@mui/material";
import moment from "moment";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userConfe from "../../assets/business-3d-smiling-young-man-in-casual-clothes-standing.png";

const EditProfile = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(15,23,42,1)",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  color: "#fff",
  width: "100%",
  marginTop: "10px",
  textTransform: "capitalize",
  fontWeight: "600",
  ":hover": {
    backgroundColor: "rgb(15,23,42,1)",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: "20px",
  },
}));

const ConfedanceYou = styled(Button)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#F2F4FB",
  color: "#1F2024",
  padding: "10px",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const InputField = styled("input")(({ theme }) => ({
  width: "100%",
  border: "1px solid #e8eaed32",
  backgroundColor: "#FCFBFC",
  padding: "10px 10px",
  outline: "none",
  borderRadius: "6px",
  fontSize: "18px",
  color: "#313131",
}));

const MyProfileView = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: any) => state.user);
  const { avatar, name, email } = user;

  return (
    <Fragment>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "transparent",
                }}
              >
                <img
                  width={120}
                  style={{
                    clipPath: "circle()",
                    marginRight: "20px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  }}
                  src={avatar?.url}
                  alt="user"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    fontFamily: "Poppins",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: ".8rem",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  New York, USA
                </Typography>
                {/* <Button
                  onClick={() => navigate("/profile/update")}
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    fontFamily: "Poppins",
                    backgroundColor: "#7151F2",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    padding: "8px 13px",

                    border: "1px solid transparent",
                    ":hover": {
                      backgroundColor: "transparent",
                      border: "1px solid #7151F2",
                      color: "#7151F2",
                    },
                  }}
                >
                  Edit Profile
                </Button> */}
                {/* <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    color: "#1F2024",
                    fontFamily: "Poppins",
                    backgroundColor: "#fff",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    padding: "8px 32px",
                  }}
                >
                  <i
                    style={{ color: "#EC496F", marginRight: "5px" }}
                    className="ri-delete-bin-7-line"
                  ></i>
                  Supprimer
                </Button> */}
              </Box>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              <Box
                sx={{
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "4px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Name:
                  </Typography>
                  <InputField readOnly value={name} />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "4px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Email:
                  </Typography>
                  <InputField readOnly value={email} />
                </Box>
              </Box>
              <Box
                sx={{
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "4px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Phone:
                  </Typography>
                  <InputField readOnly value="01980796731" />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "4px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Location:
                  </Typography>
                  <InputField readOnly value="e.g New York USA" />
                </Box>
              </Box>
              <Box
                sx={{
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%", margin: "0 10px" }}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#333",
                      marginBottom: "4px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Postal Code:
                  </Typography>
                  <InputField readOnly value="343434" />
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    color: "#1F2024",
                    fontFamily: "Poppins",
                    backgroundColor: "#fff",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    padding: "8px 32px",
                  }}
                >
                  <i
                    style={{ color: "#EC496F", marginRight: "5px" }}
                    className="ri-delete-bin-7-line"
                  ></i>
                  Supprimer
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <ConfedanceYou>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    marginBottom: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  Renforcez la Confidence
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    marginBottom: "6px",
                    textTransform: "capitalize",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem soluta, possimus error perferendis beatae recusandae
                  reprehenderit illo expedita voluptas officiis.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  Dolorem soluta, possimus error perferendis beatae recusandae
                  reprehenderit illo expedita voluptas officiis.
                </Typography>
              </Box>
              <Box>
                <img width={80} src={userConfe} alt="" />
              </Box>
            </ConfedanceYou>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MyProfileView;
