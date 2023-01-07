import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const MyProfileView = () => {
  const [name, setName] = useState("Enrico Cole");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <img
            style={{ borderRadius: "50%", width: "100px" }}
            src="https://chisnghiax.com/ciseco/static/media/Image-3.f257bc3c2ce5ae3a57db.png"
            alt="profile"
          />
        </Box>
        <Box>
          <form style={{ marginTop: "30px" }} action="">
            <TextField
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "100%", marginBottom: "30px" }}
              id="outlined-basic"
              label="Full name"
              value={name}
              variant="outlined"
            />
            <TextField
              type="email"
              required
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "100%", marginBottom: "30px" }}
              id="email"
              label="Email"
              value={name}
              variant="outlined"
            />
            <TextField
              type="date"
              required
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "100%", marginBottom: "30px" }}
              id="email"
              label="Date of birth"
              value={name}
              variant="outlined"
            />
            <FormControl fullWidth sx={{ marginBottom: "30px" }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              sx={{ width: "100%", marginBottom: "30px" }}
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            <Button
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
  );
};

export default MyProfileView;
