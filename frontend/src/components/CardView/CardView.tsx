import React, { useEffect, useState } from "react";
import { Box, Backdrop, useMediaQuery, useTheme } from "@mui/material";
import CardViewHeader from "./CardViewHeader";
import { productMenu } from "../../util/Product";
import CardProduct from "./CardProduct";
import { motion, AnimatePresence } from "framer-motion";
import CardViewSummary from "./CardViewSummary";

interface CardViewProps {
  showCardView: boolean;
  setShowCardView: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardView = ({ showCardView, setShowCardView }: CardViewProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cardViewWidth = matches ? "100%" : "600px";
  return (
    <AnimatePresence>
      <Backdrop open={showCardView}>
        <motion.div
          animate={{
            width: showCardView ? cardViewWidth : "0px",
            x: showCardView ? 0 : 10,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 12,
            },
          }}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            height: "100vh",
            // width: "600px",
            padding: "40px",
            overflowY: "auto",
            background: "#fff",
            boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
            fontWeight: "500",
          }}
        >
          <CardViewHeader
            showCardView={showCardView}
            setShowCardView={setShowCardView}
          />
          <Box>
            {productMenu.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </Box>
          <CardViewSummary />
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default CardView;
