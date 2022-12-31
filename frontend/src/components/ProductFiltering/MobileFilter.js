import { Backdrop, Box } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CategoryFilter from "./CategoryFilter";
import GenderFilter from "./RatingFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";
import { motion, AnimatePresence } from "framer-motion";
import { ResetButton } from "../../style/ProductFiltering/ProductFiltering";
import { filterColor } from "../../util/FilterOption";

const MobileFilter = ({ setIsOpen, isOpen }) => {
  const [activeColor, setActiveColor] = useState(filterColor[0]);
  const [price, setPrice] = useState([2000, 6000]);
  const [pCategory, setPCategory] = useState("");

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
              <CategoryFilter
                setPCategory={setPCategory}
                pCategory={pCategory}
              />
              <GenderFilter />
              <ColorFilter
                setActiveColor={setActiveColor}
                activeColor={activeColor}
              />
              <SizeFilter />
              <PriceFilter price={price} setPrice={setPrice} />
              <ResetButton>All Reset</ResetButton>
            </Box>
          </motion.div>
        </Backdrop>
      </Box>
    </AnimatePresence>
  );
};

export default MobileFilter;
