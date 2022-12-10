import { Box, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { filterColor } from "../util/FilterOption";
import FilterHeader from "./FilterHeader";
import { motion, AnimatePresence } from "framer-motion";
const Button = styled("button")(({ theme }) => ({}));

const ColorFilter = () => {
  const [showOption, setShowOption] = useState(true);
  const [activeColor, setActiveColor] = useState(filterColor[0]);
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
        title="Colors"
        setShowOption={setShowOption}
        showOption={showOption}
      />
      <Box>
        <AnimatePresence>
          {showOption && (
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {filterColor.map((c, index) => (
                <Button
                  key={index}
                  className="color_roundedFilter"
                  onClick={() => setActiveColor(c)}
                  sx={{
                    backgroundColor: `${c}`,
                    "::after": {
                      border: {
                        border: `1px solid ${
                          activeColor === c ? c : "transparent"
                        }`,
                      },
                    },
                  }}
                ></Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default ColorFilter;
