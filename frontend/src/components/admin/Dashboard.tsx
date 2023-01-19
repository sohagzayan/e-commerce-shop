import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MetaData from "../../util/MetaData";
import HeaderTwo from "../Header/HeaderTwo";
import Sidebar from "./Sidebar";
import { Doughnut, Line } from "react-chartjs-2";

const Dashboard = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:997px)");

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };

  return (
    <Box sx={{ overflow: "clip" }}>
      <MetaData title="Dashboard - Admin Panel" />
      <HeaderTwo />
      <Box>
        <Grid container>
          <Grid xs={matches ? 0 : 2}>
            <Box
              sx={{
                position: "fixed",
                height: "100vh",
                top: matches ? "0px" : 0,
                left: matches ? "-100%" : 0,
              }}
            >
              <Sidebar />
            </Box>
          </Grid>
          <Grid xs={matches ? 12 : 10}>
            <Box
              sx={{
                backgroundColor: "#EFF2F8",
                height: "100vh",
                padding: "20px",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {matches && (
                    <Button>
                      <i
                        style={{ fontSize: "22px", cursor: "pointer" }}
                        className="ri-menu-2-fill"
                      ></i>
                    </Button>
                  )}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#000D1F",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Dashboard
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      backgroundColor: "#6A75CA",
                      textAlign: "center",
                      marginTop: "20px",
                      padding: "15px",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                      Total Amount
                      <br />
                      $45454
                    </Typography>
                  </Box>
                  <Box
                    className=""
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      marginTop: "20px",
                      borderRadius: "50%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#6A75CA",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        color: "#fff",
                        padding: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "22px", fontFamily: "Poppins" }}
                      >
                        Product
                      </Typography>
                      <span
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                        }}
                      >
                        60
                      </span>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#6A75CA",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        color: "#fff",
                        padding: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "22px", fontFamily: "Poppins" }}
                      >
                        Orders
                      </Typography>
                      <span
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                        }}
                      >
                        60
                      </span>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: "#6A75CA",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        color: "#fff",
                        padding: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "22px", fontFamily: "Poppins" }}
                      >
                        Users
                      </Typography>
                      <span
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                        }}
                      >
                        60
                      </span>
                    </Box>
                  </Box>
                  <Box>{/* <Doughnut data={lineState} /> */}</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
