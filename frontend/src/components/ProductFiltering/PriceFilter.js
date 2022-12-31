import { Box, Slider, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { filterPrice } from "../../util/FilterOption";
import FilterHeader from "./FilterHeader";
import { motion, AnimatePresence } from "framer-motion";
const Button = styled("button")(({ theme }) => ({}));

const PriceFilter = ({
  price,
  setPrice,
  setActiveExactPrice,
  activeExactPrice,
}) => {
  const [showOption, setShowOption] = useState(true);

  function valuetext(value) {
    return `${price}°C`;
  }
  const handleChange = (event, newValue) => {
    setPrice(newValue);
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
                    onClick={() => setActiveExactPrice(price)}
                    sx={{
                      backgroundColor:
                        activeExactPrice === price ? "#0d6efd" : "transparent",
                      color: activeExactPrice === price ? "#fff" : "#777777",
                    }}
                  >
                    {price}
                  </Button>
                ))}
              </Box>
              <Box>
                <Slider
                  min={10}
                  max={5000}
                  getAriaLabel={() => "Temperature range"}
                  value={price}
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
                    Price: ${price[0]}
                  </Box>
                  <Box> ${price[1]}</Box>
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
