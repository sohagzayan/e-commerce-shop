import { Box, Button, Grid, styled, Typography } from "@mui/material";
import moment from "moment";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <img
              width={200}
              style={{ clipPath: "circle()" }}
              src={avatar?.url}
              alt="user"
            />

            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/profile/update")}
            >
              <i style={{ fontSize: "1.5rem" }} className="ri-edit-line"></i>
            </span>
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
                {moment(user?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={() => navigate("/profile/order")}
                  sx={{
                    backgroundColor: "rgb(15,23,42,1)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    color: "#fff",
                    // width: "100%",
                    marginTop: "10px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    padding: "10px 40px",
                    borderRadius: "30px",
                    marginRight: "6px",
                    ":hover": {
                      backgroundColor: "#1E293B",
                    },
                  }}
                >
                  My Order
                </Button>
                <Button
                  onClick={() => navigate("/profile/reset-password")}
                  sx={{
                    backgroundColor: "rgb(15,23,42,1)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                    color: "#fff",
                    // width: "100%",
                    marginTop: "10px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    padding: "10px 40px",
                    borderRadius: "30px",
                    ":hover": {
                      backgroundColor: "#1E293B",
                    },
                  }}
                >
                  Change Password
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MyProfileView;
