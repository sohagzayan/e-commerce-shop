import React, { useEffect, useRef, useState } from "react";
import { Box, Backdrop, useMediaQuery, useTheme } from "@mui/material";
import CardViewHeader from "./CardViewHeader";
import { productMenu } from "../../util/Product";
import CardProduct from "./CardProduct";
import { motion, AnimatePresence } from "framer-motion";
import CardViewSummary from "./CardViewSummary";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { scrollBlock } from "../../sharedFunction/ScrollBlock";

interface CardViewProps {
  showCardView: boolean;
  setShowCardView: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardView = ({ showCardView, setShowCardView }: CardViewProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cardViewWidth = matches ? "100%" : "500px";

  useEffect(() => {
    scrollBlock(showCardView);
  }, [showCardView]);

  return (
    <AnimatePresence>
      <Backdrop
        open={showCardView}
        onClick={() => setShowCardView(false)}
      ></Backdrop>
      <motion.div
        className="cardItemView"
        animate={{
          width: showCardView ? cardViewWidth : "0px",
          x: showCardView ? 0 : 10,
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 12,
          },
        }}
      >
        <CardViewHeader
          showCardView={showCardView}
          setShowCardView={setShowCardView}
        />
        <Box sx={{ padding: "0px 40px" }}>
          {productMenu.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </Box>
        <CardViewSummary />
      </motion.div>
    </AnimatePresence>
  );
};

export default CardView;
