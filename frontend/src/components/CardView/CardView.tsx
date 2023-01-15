import React, { useEffect, useRef, useState } from "react";
import { Box, Backdrop, useMediaQuery, useTheme, Dialog } from "@mui/material";
import CardViewHeader from "./CardViewHeader";
import { productMenu } from "../../util/Product";
import CardProduct from "./CardProduct";
import { motion, AnimatePresence } from "framer-motion";
import CardViewSummary from "./CardViewSummary";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { scrollBlock } from "../../sharedFunction/ScrollBlock";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { removeItemsFormCard } from "../../store/reducerSlice/cardSlice";

interface CardViewProps {
  showCardView: boolean;
  setShowCardView: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardView = ({ showCardView, setShowCardView }: CardViewProps) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cardViewWidth = matches ? "100%" : "500px";
  const { cardItems } = useSelector((state: any) => state.card);

  const deleteCardItem = (id: string) => {
    dispatch(removeItemsFormCard(id));
  };

  return (
    <AnimatePresence>
      <Backdrop
        open={showCardView}
        onClick={() => setShowCardView(false)}
        style={{ cursor: "pointer" }}
      ></Backdrop>
      <Box className={showCardView ? "cardItemView active" : "cardItemView"}>
        <Box sx={{ backgroundColor: "#fff", position: "relative" }}>
          <motion.div className="">
            <CardViewHeader
              showCardView={showCardView}
              setShowCardView={setShowCardView}
            />
            <Box sx={{ padding: "0px 40px", minHeight: "100vh" }}>
              {cardItems &&
                cardItems.map((product: any, index: number) => (
                  <CardProduct
                    product={product}
                    deleteCardItem={deleteCardItem}
                  />
                ))}
            </Box>
            <CardViewSummary cardItems={cardItems} />
          </motion.div>
        </Box>
      </Box>
    </AnimatePresence>
  );
};

export default CardView;
