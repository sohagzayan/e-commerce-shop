import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfile = styled(Button)(({ theme }) => ({
  backgroundColor: "#6077F0",
  color: "#fff",
  width: "100px",
  marginTop: "10px",
  textTransform: "capitalize",
  fontWeight: "600",
  ":hover": {
    backgroundColor: "#6077F0",
  },
  [theme.breakpoints.down("lg")]: {
    marginBottom: "20px",
  },
}));

const MyProfileView = () => {
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state: any) => state.user);
  const { avatar, name, email } = user;

  return (
    <Fragment>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "left",
            }}
          >
            <img
              width={250}
              style={{ borderRadius: "10px" }}
              src={avatar?.url}
              alt="user"
            />
            <EditProfile onClick={() => navigate("/profile/update")}>
              Edit Profile
            </EditProfile>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                Name:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                {email}
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                Phone Number:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                01980796731
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                Address:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                saver, dhaka
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
              >
                Joined On:
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                2021-8-31
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#6077F0",
                  color: "#fff",
                  width: "100%",
                  marginTop: "10px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "#6077F0",
                  },
                }}
              >
                My Order
              </Button>
              <Button
                sx={{
                  backgroundColor: "#6077F0",
                  color: "#fff",
                  width: "100%",
                  marginTop: "10px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  ":hover": {
                    backgroundColor: "#6077F0",
                  },
                }}
              >
                Change Password
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MyProfileView;
