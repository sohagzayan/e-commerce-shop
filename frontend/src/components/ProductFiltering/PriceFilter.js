import { Box, Slider, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { filterPrice } from "../../util/FilterOption";
import FilterHeader from "./FilterHeader";
import { motion, AnimatePresence } from "framer-motion";
const Button = styled("button")(({ theme }) => ({}));

const PriceFilter = () => {
  const [value, setValue] = useState([2000, 6000]);
  const [showOption, setShowOption] = useState(true);
  const [activeSize, setActiveSize] = useState(filterPrice[0]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Box>
      <FilterHeader
        title="Price"
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
            <Box>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {filterPrice.map((price, index) => (
                  <Button
                    key={index}
                    className="sizeButton"
                    onClick={() => setActiveSize(price)}
                    sx={{
                      backgroundColor:
                        activeSize === price ? "#0d6efd" : "transparent",
                      color: activeSize === price ? "#fff" : "#777777",
                    }}
                  >
                    {price}
                  </Button>
                ))}
              </Box>
              <Box>
                <Slider
                  min={10}
                  max={10000}
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    paddingY: "10px",
                  }}
                >
                  <Box sx={{ marginRight: "20px", fontWeight: "500" }}>
                    Price: ${value[0]}
                  </Box>
                  <Box> ${value[1]}</Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default PriceFilter;
