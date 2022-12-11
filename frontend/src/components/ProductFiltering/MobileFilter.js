import { Backdrop, Box, styled } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CategoryFilter from "./CategoryFilter";
import GenderFilter from "./GenderFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";
import { motion, AnimatePresence } from "framer-motion";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#3577f0",
  width: "100%",
  padding: "16px 38px",
  fontWeight: "700",
  borderRadius: "6px",
  fontSize: "16px",
  border: "none",
  color: "#fff",
}));

const MobileFilter = ({ setIsOpen, isOpen }) => {
  return (
    <AnimatePresence>
      <Box className="filter-sidebar-container">
        <Backdrop
          sx={{ display: "flex", justifyContent: "start" }}
          open={isOpen}
          // onClick={() => setIsOpen(false)}
        >
          <motion.div
            animate={{
              width: isOpen ? "300px" : "0px",
              // x: isOpen ? 0 : -100,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            style={{ width: "300px" }}
            className="sidebar"
          >
            <Box
              sx={{
                backgroundColor: "#F6F7FB",
                color: "#777777",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "10px",
                cursor: "pointer",
                marginBottom: "30px",
              }}
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </Box>
            <Box>
              <CategoryFilter />
              <GenderFilter />
              <ColorFilter />
              <SizeFilter />
              <PriceFilter />
              <Button>All Reset</Button>
            </Box>
          </motion.div>
        </Backdrop>
      </Box>
    </AnimatePresence>
  );
};

export default MobileFilter;
