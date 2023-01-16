import { Box, Button, Checkbox, ListItem, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { colorFiltering } from "../../util/FilterOption";
import CategoryItem from "./CategoryItem";
import ColorItem from "./ColorItem";
import FilteringHeader from "./FilteringHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";

interface Props {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const ColorFiltering: React.FunctionComponent<Props> = (props) => {
  const { colors, setColors } = props;

  const [showColorsFiltering, setShowColorsFiltering] = useState(false);
  const [checked, setChecked] = useState(false);
  const outSide = useRef(null);
  const closeHandler = () => {
    setShowColorsFiltering(false);
  };

  useClickOutside(outSide, closeHandler);

  return (
    <Box ref={outSide} sx={{ marginRight: "15px", position: "relative" }}>
      <FilteringHeader
        onChange={setShowColorsFiltering}
        state={showColorsFiltering}
        startIcon="ri-paint-fill"
        endIcon="ri-arrow-down-s-line"
        categoryes={colors}
      >
        Colors
      </FilteringHeader>

      <AnimatePresence>
        {showColorsFiltering && (
          <motion.div
            variants={FilteringMenuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{ position: "relative", zIndex: "99" }}
          >
            <Box
              sx={{
                width: "300px",
                position: "absolute",
                top: "50px",
                left: "0",
                zIndex: "20",
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
              }}
            >
              <Box sx={{ padding: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {colorFiltering.map((color, index) => (
                    <div key={index}>
                      <ColorItem {...{ color, colors, setColors }} />
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ColorFiltering;
