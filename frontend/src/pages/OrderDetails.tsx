import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearOrderDetailsError,
  getOrderDetails,
} from "../store/reducerSlice/orderDetailsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Loading from "../components/Loading/Loading";
import MetaData from "../util/MetaData";
import "./orderSuccess.css";
import HeaderTwo from "../components/Header/HeaderTwo";
import OrderedItems from "../components/OrderDetails/OrderedItems";

const OrderDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const alert = useAlert();
  const { id } = useParams();
  const { order, error, loading } = useSelector(
    (state: any) => state.orderDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearOrderDetailsError());
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error, id]);

  return (
    <Box sx={{ overflowX: "clip " }}>
      <HeaderTwo />
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <Box>
            <Container maxWidth="lg">
              <Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "2rem",
                    }}
                  >
                    Order Detail
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => navigate("profile/order")}
                      sx={{
                        fontFamily: "Poppins",
                        textTransform: "uppercase",
                        fontWeight: "400",
                        backgroundColor: "#7151F2",
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        border: "1px solid transparent",
                        marginRight: "10px",
                        color: "#fff",
                        fontSize: ".7rem",
                        ":hover": {
                          border: "1px solid #7151F2",
                          color: "#7151F2",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <i
                        style={{ marginRight: "3px" }}
                        className="ri-arrow-left-line"
                      ></i>{" "}
                      Back To Order List
                    </Button>
                    <Button
                      onClick={() => navigate("/shipping")}
                      sx={{
                        fontFamily: "Poppins",
                        textTransform: "uppercase",
                        fontWeight: "400",
                        backgroundColor: "transparent",
                        border: "1px solid #7151F2",
                        color: "#7151F2",
                        boxShadow:
                          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        fontSize: ".7rem",
                        ":hover": {
                          border: "1px solid transparent",
                          color: "#fff",
                          backgroundColor: "#7151F2",
                        },
                      }}
                    >
                      Re-Order
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      backgroundColor: "#F6F7FB",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      borderRadius: "8px",
                      fontWeight: "400",
                      padding: "10px",
                    }}
                  >
                    Order is on hold until Dec 2, 2014
                  </Typography>
                  <Box sx={{ marginTop: "5px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: ".9rem",
                      }}
                    >
                      Order Number{" "}
                      <span
                        style={{
                          fontWeight: "400",
                          marginLeft: "5px",
                        }}
                      >
                        1212121
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: ".9rem",
                      }}
                    >
                      Order Date
                      <span
                        style={{
                          fontWeight: "400",
                          marginLeft: "5px",
                        }}
                      >
                        Nov 20, 2014
                      </span>
                    </Typography>
                  </Box>
                  <Box>
                    <Grid container sx={{ marginTop: "30px" }}>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            borderRadius: "8px",
                            fontWeight: "500",
                            fontSize: "1.2rem",
                          }}
                        >
                          Bill To:
                        </Typography>
                        <Box sx={{ marginTop: "20px" }}>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.user?.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.address}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.city}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.pinCode}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                              marginTop: "25px",
                            }}
                          >
                            Phone: {order?.shippingInfo?.phoneNo}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            Email: {order?.user?.email}
                          </Typography>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "500",
                                fontSize: "1.2rem",
                                marginTop: "20px",
                              }}
                            >
                              Payment
                            </Typography>
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontWeight: "400",
                                  fontSize: "1rem",
                                  marginTop: "2px",
                                }}
                              >
                                {order.paymentInfo &&
                                order.paymentInfo.status === "succeeded"
                                  ? "PAID"
                                  : "NOT PAID"}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontWeight: "400",
                                  fontSize: "1rem",
                                  marginTop: "2px",
                                }}
                              >
                                Amount: {order.totalPrice && order.totalPrice}
                              </Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "500",
                                fontSize: "1.2rem",
                                marginTop: "20px",
                              }}
                            >
                              Order Status
                            </Typography>
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: "Poppins",
                                  fontWeight: "400",
                                  fontSize: "1rem",
                                  marginTop: "2px",
                                }}
                              >
                                {order.orderStatus && order.orderStatus}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            borderRadius: "8px",
                            fontWeight: "500",
                            fontSize: "1.2rem",
                          }}
                        >
                          Ship To:
                        </Typography>
                        <Box sx={{ marginTop: "20px" }}>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.user?.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.address}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.city}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            {order?.shippingInfo?.pinCode}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                              marginTop: "25px",
                            }}
                          >
                            Phone: {order?.shippingInfo?.phoneNo}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "400",
                              fontSize: "1rem",
                            }}
                          >
                            Email: {order?.user?.email}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box sx={{ marginTop: "40px" }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "1.2rem",
                        }}
                      >
                        Order Items
                      </Typography>
                      <OrderedItems order={order} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default OrderDetails;
