import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import HeaderTwo from "../components/Header/HeaderTwo";
import { Country, State } from "country-state-city";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AppDispatch } from "../store/store";
import { saveOrderShippingInfo } from "../store/reducerSlice/cardSlice";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "../sharedFunction/ScrollTop";

const InputField = styled("input")(({ theme }) => ({
  border: "1px solid rgba(229,231,235,1)",
  padding: "13px 12px",
  fontSize: "15px",
  width: "100%",
  borderRadius: "10px",
  outline: "#DCF2FE",
}));

const InputLabel = styled("label")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "14px",
  color: "#1E293B",
  marginBottom: "5px",
  display: "inline-block",
  cursor: "pointer",
}));

const ShippingWrapper = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(229,231,235,1)",
  padding: "10px 10px",
  width: "650px",
  margin: "20px auto",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "98%",
  },
}));

const ShippingInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { shippingInfo } = useSelector((state: any) => state.card);
  console.log("shippingInfo", shippingInfo);
  const alert = useAlert();
  const [fastName, setFastName] = useState(shippingInfo.fastName);
  const [lastName, setLastName] = useState(shippingInfo.lastName);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [addressType, setAddressType] = useState(shippingInfo.addressType);

  const shippingSubmit = (e: any) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveOrderShippingInfo({
        address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
        addressType,
        fastName,
        lastName,
      })
    );
    navigate("/confirm-order");
  };

  useEffect(() => {
    ScrollTop();
  }, []);

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
        <HeaderTwo />
        <Box sx={{ marginTop: "20px" }}>
          <CheckoutSteps activeStep={0} />
        </Box>
        <Box className="">
          <Container maxWidth="lg">
            <ShippingWrapper>
              <form
                onSubmit={shippingSubmit}
                style={{ width: "100%", padding: "0 15px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "100%",
                      marginBottom: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <InputLabel htmlFor="name">Fast Name</InputLabel>
                    <InputField
                      required
                      value={fastName}
                      onChange={(e) => setFastName(e.target.value)}
                      id="address"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      marginBottom: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <InputLabel htmlFor="name">Last Name</InputLabel>
                    <InputField
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      id="address"
                    />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "100%",
                      marginBottom: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <InputField
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="address"
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      marginBottom: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <InputLabel htmlFor="apt">Phone Number</InputLabel>
                    <InputField
                      id="apt"
                      required
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      marginBottom: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <InputLabel htmlFor="apt">City</InputLabel>
                    <InputField
                      id="apt"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      marginBottom: "10px",
                      paddingLeft: "10px",
                    }}
                  >
                    <InputLabel htmlFor="apt">Pin Code</InputLabel>
                    <InputField
                      id="apt"
                      required
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </Box>
                </Box>

                <Box sx={{ width: "100%", marginBottom: "15px" }}>
                  <select
                    required
                    style={{
                      height: "45px",
                      borderRadius: "10px",
                      width: "100%",
                      border: "1px solid rgba(229,231,235,1)",
                      outline: "#DCF2FE",
                    }}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Country</option>
                    {Country &&
                      Country.getAllCountries().map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </Box>
                <Box sx={{ width: "100%", marginBottom: "10px" }}>
                  {country && (
                    <div>
                      <select
                        style={{
                          height: "45px",
                          borderRadius: "10px",
                          width: "100%",
                          border: "1px solid rgba(229,231,235,1)",
                          outline: "#DCF2FE",
                        }}
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">State</option>
                        {State &&
                          State.getStatesOfCountry(country).map((item) => (
                            <option key={item.isoCode} value={item.isoCode}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </Box>
                <Box sx={{ width: "100%", marginBottom: "10px" }}>
                  <InputLabel htmlFor="apt">Address type</InputLabel>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <select
                      style={{
                        height: "45px",
                        borderRadius: "10px",
                        width: "100%",
                        border: "1px solid rgba(229,231,235,1)",
                        outline: "#DCF2FE",
                      }}
                      className="addressType"
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                    >
                      <option value="home">Home (All Day Delivery)</option>
                      <option value="office">
                        Office (Delivery 9 AM - 5 PM)
                      </option>
                    </select>
                  </Box>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "rgb(15,23,42,1)",
                      padding: "15px 50px",
                      fontSize: ".9rem",
                      color: "#fff",
                      fontWeight: "600",
                      borderRadius: "30px",
                      marginTop: "10px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      ":hover": {
                        backgroundColor: "rgb(15,23,42,1)",
                      },
                    }}
                  >
                    Save and next to Payment
                  </Button>
                  <Button
                    onClick={() => navigate("/card")}
                    sx={{
                      textTransform: "capitalize",
                      padding: "15px 50px",
                      fontSize: "1rem",
                      color: "rgb(15,23,42,1)",
                      fontWeight: "600",

                      marginTop: "10px",

                      ":hover": {
                        color: "rgb(15,23,42,1)",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </ShippingWrapper>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ShippingInfo;
