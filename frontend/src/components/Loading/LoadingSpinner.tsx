import { Box, CircularProgress } from "@mui/material";
import { Fragment } from "react";

const LoadingSpinner = () => {
  return (
    <Fragment>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <CircularProgress />
      </Box>
    </Fragment>
  );
};

export default LoadingSpinner;
