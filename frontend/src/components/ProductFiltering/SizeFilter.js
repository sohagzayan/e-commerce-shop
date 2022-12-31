import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { filterSize } from "../../util/FilterOption";
import FilterHeader from "./FilterHeader";
import { motion, AnimatePresence } from "framer-motion";
import { GetSizeButton } from "../../style/ProductFiltering/ProductFiltering";

const SizeFilter = () => {
  const [showOption, setShowOption] = useState(true);
  const [activeSize, setActiveSize] = useState(filterSize[0]);

  const menuAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };
  return (
    <Box sx={{ paddingBottom: "30px" }}>
      <FilterHeader
        title="Size"
        setShowOption={setShowOption}
        showOption={showOption}
      />
      <AnimatePresence>
        {showOption && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {filterSize.map((size, index) => (
                <GetSizeButton
                  key={index}
                  className="sizeButton"
                  onClick={() => setActiveSize(size)}
                  sx={{
                    backgroundColor:
                      activeSize === size ? "#0d6efd" : "transparent",
                    color: activeSize === size ? "#fff" : "#777777",
                  }}
                >
                  {size}
                </GetSizeButton>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SizeFilter;
