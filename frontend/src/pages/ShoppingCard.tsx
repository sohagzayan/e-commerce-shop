import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment } from "react";
import HeaderTwo from "../components/Header/HeaderTwo";
import ShoppingCardProduct from "../components/ShoppingCards/ShoppingCardProduct";
import { productMenu } from "../util/Product";

const ShoppingCard = () => {
  const matches = useMediaQuery("(min-width:1051px)");
  return (
    <Fragment>
      <HeaderTwo />
      <Box>
        <Container maxWidth="lg">
          <Box sx={{ padding: "60px 0" }}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "600",
                color: "#0F172A",
                marginBottom: "10px",
              }}
            >
              Shopping Cart
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "500", color: "#334155" }}
            >
              Homepage / Clothing Categories / Shopping Cart
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid
              item
              xs={matches ? 7 : 12}
              sx={{ borderRight: "1px solid #e5e7eb", paddingRight: "15px" }}
            >
              {productMenu.map((data) => (
                <ShoppingCardProduct data={data} />
              ))}
            </Grid>
            <Grid item xs={matches ? 5 : 12} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "sticky",
                  top: 100,
                  left: 0,
                  padding: "0 25px",
                }}
              >
                <Typography
                  sx={{
                    color: "#0F172A",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "20px",
                  }}
                >
                  Order Summary
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e5e7eb",
                      marginBottom: "15px",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: "1rem",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      $249.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e5e7eb",
                      marginBottom: "15px",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: "1rem",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      Shpping estimate
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      $5.00
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #e5e7eb",
                      marginBottom: "15px",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: "1rem",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      Tax estimate
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      $24.90
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                        paddingBottom: "5px",
                      }}
                    >
                      Order total
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      $276.00
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      backgroundColor: "#1E293B",
                      color: "#fff",
                      textTransform: "capitalize",
                      width: "100%",
                      padding: "15px 0",
                      borderRadius: "50px",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginTop: "10px",
                    }}
                  >
                    Checkout
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ShoppingCard;
