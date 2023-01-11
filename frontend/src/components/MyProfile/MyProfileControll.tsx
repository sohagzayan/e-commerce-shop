import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

const MyProfileControll = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const { user } = useSelector((state: any) => state.user);
  const { loading, isUpdated, error } = useSelector(
    (state: any) => state.updateProfile
  );
  const [avatarPreview, setAvatarPreview] = useState<any>("./profile.png");
  const [avatar, setAvatar] = useState<any>("");
  const handleChange = (event: any) => {
    setAge(event.target.value);
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
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setBio(user.bio);
      setAvatarPreview(user.avatar.url);
    }
    if (error) {
      alert.error(error);
      dispatch(profileUpdateResetError());
    }
    if (isUpdated) {
      alert.success("Profile update Successfully");
      dispatch(loadUser());
      navigate("/profile");
      dispatch(profileUpdateReset());
    }
  }, [dispatch, isUpdated, navigate, user, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  marginBottom: "10px",
                }}
                src={avatarPreview}
                alt="profile"
              />
              <input
                style={{ marginBottom: "20px" }}
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
                <TextField
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  sx={{ width: "100%", marginBottom: "30px" }}
                  id="outlined-basics"
                  label="Name"
                  value={name}
                  variant="outlined"
                  name="name"
                />
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
                    backgroundColor: "#0d6efd",
                    color: "#fff",
                    border: "1px solid transparent",
                    fontWeight: "600",
                    ":hover": {
                      backgroundColor: "transparent",
                      border: "1px solid #0d6efd",
                      color: "#0d6efd",
                    },
                  }}
                >
                  Update account
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default MyProfileControll;
