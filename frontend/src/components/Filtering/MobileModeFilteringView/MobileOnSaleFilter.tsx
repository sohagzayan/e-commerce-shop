import { Box, Switch, Typography } from "@mui/material";
import { Fragment } from "react";

const MobileOnSaleFilter = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <Fragment>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{ fontSize: "22px", color: "#000042", marginBottom: "20px" }}
        >
          Colors
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "18px", color: "#000042", marginBottom: "2px" }}
            >
              On sale!
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#000042", marginBottom: "15px" }}
            >
              Products currently on sale
            </Typography>
          </Box>
          <Box>
            <Switch {...label} defaultChecked />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default MobileOnSaleFilter;
