import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderTwo from "../components/Header/HeaderTwo";
import ShoppingCardProduct from "../components/ShoppingCards/ShoppingCardProduct";
import {
  addItemsToCard,
  removeItemsFormCard,
} from "../store/reducerSlice/cardSlice";
import { AppDispatch } from "../store/store";
import { productMenu } from "../util/Product";

const ShoppingCard = () => {
  const matches = useMediaQuery("(min-width:1051px)");
  const dispatch = useDispatch<AppDispatch>();
  const { cardItems } = useSelector((state: any) => state.card);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const subtotal = cardItems.reduce(
    (acc: any, item: any) => acc + item.quantity * item.price,
    0
  );
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

  // cal
  const shippingCharges = subtotal > 1000 ? 0 : 200;
  const tax = subtotal * 0.18;
  const totalPrice = subtotal + tax + shippingCharges;

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
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
                {cardItems &&
                  cardItems?.map((item: any, index: number) => (
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
                          color: "rgb(15,23,42,1)",
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
                        ${subtotal}
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
                          color: "rgb(15,23,42,1)",
                          fontSize: "1rem",
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
                        borderBottom: "1px solid #e5e7eb",
                        marginBottom: "15px",
                        paddingBottom: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "rgb(15,23,42,1)",
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
                        ${totalPrice}
                      </Typography>
                    </Box>
                    <Button
                      onClick={() => navigate("/shipping-information")}
                      sx={{
                        backgroundColor: "rgb(15,23,42,1)",
                        color: "#fff",
                        textTransform: "capitalize",
                        width: "100%",
                        padding: "15px 0",
                        borderRadius: "50px",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginTop: "10px",
                        ":hover": {
                          backgroundColor: "#1E293B",
                        },
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
      </Box>
    </Fragment>
  );
};

export default ShoppingCard;
