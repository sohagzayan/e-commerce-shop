import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Fragment, useEffect } from "react";
import { scrollBlock } from "../../sharedFunction/ScrollBlock";

const ActionLoadingSpinner = () => {
  //   useEffect(() => {
  //     scrollBlock(true);
  //   }, []);

  return (
    <Fragment>
      <Backdrop sx={{ color: "#fff", zIndex: "99" }} open={true}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      </Backdrop>
    </Fragment>
  );
};

export default ActionLoadingSpinner;
