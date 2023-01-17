import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "../../sharedFunction/ScrollTop";
import { useAlert } from "react-alert";
import { loadUser } from "../../store/reducerSlice/authSlice";
import { AppDispatch } from "../../store/store";
import {
  profileUpdateReset,
  profileUpdateResetError,
  userProfileUpdate,
} from "../../store/reducerSlice/userProfileUpdateSlice";
import Loading from "../Loading/Loading";

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
const TextFielded = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "30px",
  outline: "none",
  label: {
    fontFamily: "Poppins",
  },
  input: {
    fontFamily: "Poppins",
    borderColor: " #CBD3D9",
    color: "#777777",
  },
}));
const MyProfileInfo = styled(Box)(({ theme }) => ({
  width: "800px",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

const MyProfileControll = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const { user } = useSelector((state: any) => state.user);
  const { loading, isUpdated, error } = useSelector(
    (state: any) => state.updateProfile
  );
  const [avatarPreview, setAvatarPreview] = useState<any>("./profile.png");
  const [avatar, setAvatar] = useState<any>("");
  const handleChange = (event: any) => {
    setRegion(event.target.value);
  };

  const updateProfileSubmit = (e: any) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("address", address);
    myForm.set("bio", bio);
    myForm.set("avatar", avatar);
    console.log("myForm", myForm);
    dispatch(userProfileUpdate(myForm));
  };

  const updateProfileDataChange = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setAddress(user?.address);
      setBio(user?.bio);
      setAvatarPreview(user?.avatar?.url);
    }
    if (error) {
      alert.error(error);
      dispatch(profileUpdateResetError());
    }
    if (isUpdated) {
      alert.success("Profile update Successfully");
      dispatch(loadUser());
      navigate("/account");
      dispatch(profileUpdateReset());
    }
  }, [dispatch, isUpdated, navigate, user, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <MyProfileInfo>
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    width: "150px",
                    clipPath: "circle()",
                    marginBottom: "10px",
                    marginRight: "20px",
                    // boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  }}
                  src={avatarPreview}
                  alt="profile"
                />
                <Box>
                  <label
                    htmlFor="imageUpload"
                    style={{
                      textTransform: "capitalize",
                      color: "#fff",
                      fontFamily: "Poppins",
                      backgroundColor: "#7151F2",
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      padding: "8px 13px",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "6px",
                      fontWeight: "500",
                      cursor: "pointer",
                      fontSize: "12px",
                      border: "1px solid transparent",
                    }}
                  >
                    <i
                      style={{
                        fontSize: "18px",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="ri-image-edit-line"
                    ></i>{" "}
                    Change Image
                  </label>
                  <input
                    id="imageUpload"
                    style={{ marginBottom: "20px", display: "none" }}
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
                  />
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
                      padding: "3px 25px",
                    }}
                  >
                    <i
                      style={{
                        color: "#EC496F",
                        marginRight: "10px",
                        fontSize: "15px",
                      }}
                      className="ri-delete-bin-7-line"
                    ></i>
                    Supprimer
                  </Button>
                </Box>
              </Box>

              <input
                id="imageUpload"
                style={{ marginBottom: "20px", display: "none" }}
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfileDataChange}
              />
            </Box>
            <Box>
              <form
                onSubmit={updateProfileSubmit}
                style={{ marginTop: "30px" }}
                action=""
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextFielded
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginRight: "10px" }}
                    id="outlined-basics"
                    label=" First Name "
                    value={name}
                    variant="outlined"
                    name="name"
                  />
                  <TextFielded
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginLeft: "10px" }}
                    id="outlined-basics"
                    label="Last Name"
                    value={name}
                    variant="outlined"
                    name="name"
                  />
                </Box>
                <Box sx={{ marginBottom: "20px" }}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country/ Region
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={region}
                      label="Country/ Region"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>United Kindom (UK)</MenuItem>
                      <MenuItem value={2}>United States (USA)</MenuItem>
                      <MenuItem value={3}>United Arab Emirates (UAE)</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: "100%", marginBottom: "30px" }}
                  id="email"
                  label="Email"
                  value={email}
                  variant="outlined"
                  name="email"
                />
                <TextField
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  sx={{ width: "100%", marginBottom: "30px" }}
                  id="address"
                  label="Address"
                  value={address}
                  variant="outlined"
                  name="address"
                />

                <TextField
                  id="bio"
                  sx={{ width: "100%", marginBottom: "30px" }}
                  label="Bio"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  name="bio"
                />
                <Button
                  type="submit"
                  sx={{
                    padding: "10px 15px",
                    backgroundColor: "rgb(15,23,42,1)",
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                    color: "#fff",
                    border: "1px solid transparent",
                    fontWeight: "600",
                    borderRadius: "6px",
                    ":hover": {
                      backgroundColor: "transparent",
                      border: "1px solid rgb(15,23,42,1)",
                      color: "rgb(15,23,42,1)",
                    },
                  }}
                >
                  Update account
                </Button>
              </form>
            </Box>
          </MyProfileInfo>
        </Box>
      )}
    </Fragment>
  );
};

export default MyProfileControll;
