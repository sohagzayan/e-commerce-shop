import { Box } from "@mui/material";
import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        top: "50%",
        left: "50%",
        zIndex: "999999",
        transform: "translate(-50%,-50%)",
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Loading;
