import { Box, Button, Typography } from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import HeaderTwo from "../components/Header/HeaderTwo";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useAlert } from "react-alert";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import MetaData from "../util/MetaData";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import {
  clearOrderError,
  createNewOrder,
} from "../store/reducerSlice/newOrderSlice";

const Payment = () => {
  const navigate = useNavigate();
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo") || "{}");
  const dispatch = useDispatch<AppDispatch>();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn: any = useRef(null);
  const { shippingInfo, cardItems } = useSelector((state: any) => state.card);
  const { user } = useSelector((state: any) => state.user);
  const { error, orders } = useSelector((state: any) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  interface OrderDataType {
    shippingInfo: any;
    orderItems: any;
    itemsPrice: any;
    taxPrice: any;
    shippingPrice: any;
    totalPrice: any;
    paymentInfo?: any;
  }
  const orderData: OrderDataType = {
    shippingInfo,
    orderItems: cardItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    payBtn.current.disabled = true;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );
      const client_secret = data.client_secret;
      if (!stripe || !elements) return;

      const cardElement = elements.getElement(CardNumberElement);

      if (cardElement) {
        const result = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: user.name,
              email: user.email,
              address: {
                line1: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                postal_code: shippingInfo.pinCode,
                country: shippingInfo.country,
              },
            },
          },
        });
        if (result.error) {
          payBtn.current.disabled = false;
          alert.error(result.error.message);
        } else {
          if (result.paymentIntent.status === "succeeded") {
            orderData.paymentInfo = {
              id: result.paymentIntent.id,
              status: result.paymentIntent.status,
            };
            dispatch(createNewOrder(orderData));
            navigate("/success");
          } else {
            alert.error("There's some issue while processing payment ");
          }
        }
      }
    } catch (error: any) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearOrderError());
    }
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <HeaderTwo />
      <Fragment>
        <Box sx={{ marginTop: "20px" }}>
          <MetaData title="Payment" />
        </Box>
        <CheckoutSteps activeStep={2} />
        <div className="paymentContainer">
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <CreditCardIcon />
              <CardNumberElement className="paymentInput" />
            </div>
            <div>
              <EventIcon />
              <CardExpiryElement className="paymentInput" />
            </div>
            <div>
              <VpnKeyIcon />
              <CardCvcElement className="paymentInput" />
            </div>
            <input
              type="submit"
              value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className="paymentFormBtn"
            />
            <Box
              className="extraControll"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingX: "50px",
              }}
            >
              <Button
                onClick={() => navigate("/card")}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  color: "rgb(15,23,42,1)",
                  fontWeight: "600",
                  ":hover": {
                    color: "rgb(15,23,42,1)",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => navigate("/confirm-order")}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  color: "rgb(15,23,42,1)",
                  fontWeight: "600",
                  ":hover": {
                    color: "rgb(15,23,42,1)",
                  },
                }}
              >
                Back
              </Button>
            </Box>
          </form>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Payment;
