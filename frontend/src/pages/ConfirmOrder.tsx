import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ConformOrderProduct from "../components/checkout/ConformOrderProduct";
import HeaderTwo from "../components/Header/HeaderTwo";
import ShoppingCardProduct from "../components/ShoppingCards/ShoppingCardProduct";
import { ScrollTop } from "../sharedFunction/ScrollTop";
import {
  addItemsToCard,
  removeItemsFormCard,
} from "../store/reducerSlice/cardSlice";
import { AppDispatch } from "../store/store";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cardItems } = useSelector((state: any) => state.card);
  const { user } = useSelector((state: any) => state.user);
  const subtotal = cardItems.reduce(
    (acc: any, item: any) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.18;
  const totalPrice = subtotal + tax + shippingCharges;
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const dispatch = useDispatch<AppDispatch>();

  const increaseQuantity = (id: string, quantity: number, stock: number) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCard(id, newQty));
  };

  const decreaseQuantity = (id: string, quantity: number) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCard(id, newQty));
  };

  const deleteCardItem = (id: string) => {
    dispatch(removeItemsFormCard(id));
  };

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/payment-conform");
  };

  useEffect(() => {
    ScrollTop();
  }, []);

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
        <HeaderTwo />
        <Box sx={{ marginTop: "20px" }}>
          <CheckoutSteps activeStep={1} />
        </Box>
        <Container maxWidth="lg">
          <Grid container sx={{ marginTop: "50px" }}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ borderRight: "1px solid #E7E9ED", paddingRight: "20px" }}
            >
              <Typography sx={{ fontSize: "1.3rem" }}>Shipping Info</Typography>
              <Box
                sx={{
                  padding: "0 15px",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginRight: "10px",
                      color: "#0F172A",
                    }}
                  >
                    Name:
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", color: "#777" }}>
                    {user?.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginRight: "10px",
                      color: "#0F172A",
                    }}
                  >
                    Phone:
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", color: "#777" }}>
                    {shippingInfo.phoneNo}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginRight: "10px",
                      color: "#0F172A",
                    }}
                  >
                    Address:
                  </Typography>
                  <Typography sx={{ fontSize: "1rem", color: "#777" }}>
                    {address}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: "60px" }}>
                <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
                  {" "}
                  Your Cart Items:
                </Typography>
                <Box sx={{ marginTop: "50px" }}>
                  {cardItems &&
                    cardItems.map((item: any, index: number) => (
                      <ShoppingCardProduct
                        key={index}
                        {...{
                          item,
                          increaseQuantity,
                          decreaseQuantity,
                          deleteCardItem,
                        }}
                      />
                    ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ padding: "0 20px", position: "relative" }}
            >
              <Box sx={{ position: "sticky", top: "100px", left: "0px" }}>
                <label
                  style={{ marginBottom: "5px", display: "inline-block" }}
                  htmlFor=""
                >
                  Discount code
                </label>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    style={{
                      border: "1px solid #E7E9ED",
                      width: "100%",
                      height: "35px",
                      borderRadius: "10px",
                      marginRight: "15px",
                    }}
                    type="text"
                  />
                  <Button
                    sx={{
                      backgroundColor: "rgba(229,231,235,.7)",
                      textTransform: "capitalize",
                      color: "#374151",
                    }}
                  >
                    Apply
                  </Button>
                </Box>
                <Box sx={{ marginTop: "30px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: ".9rem",
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
                      ${subtotal}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: ".9rem",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      Shipping Charge
                    </Typography>
                    <Typography
                      sx={{
                        color: "#0F172A",
                        fontSize: "1rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}
                    >
                      ${shippingCharges}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "5px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#738296",
                        fontSize: ".9rem",
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
                      ${tax}
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
                        fontSize: ".9rem",
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
                      ${totalPrice}
                    </Typography>
                  </Box>
                  <Button
                    onClick={proceedToPayment}
                    sx={{
                      backgroundColor: "rgb(15,23,42,1)",
                      width: "100%",
                      textTransform: "capitalize",
                      color: "#fff",
                      padding: "10px 0",
                      fontSize: "1rem",
                      borderRadius: "30px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      marginTop: "10px",
                      ":hover": {
                        backgroundColor: "#1E293B",
                      },
                    }}
                  >
                    Proceed To Payment
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

export default ConfirmOrder;
