import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { filterSize } from "../../util/FilterOption";
import ColorItem from "./ColorItem";
import FilteringHeader from "./FilteringHeader";
import SizeItem from "./SizeItem";
import { motion, AnimatePresence } from "framer-motion";
import { FilteringMenuAnimation } from "../../framerMotion/framerMotion";

interface Props {
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
}

const SizeFiltering: React.FunctionComponent<Props> = (props) => {
  const { sizes, setSizes } = props;
  const [showSizeFiltering, setShowSizeFiltering] = useState(false);
  const menuRef = useRef(null);
  const closeHandle = () => {
    setShowSizeFiltering(false);
  };
  useClickOutside(menuRef, closeHandle);

  return (
    <Box ref={menuRef} sx={{ marginRight: "15px", position: "relative" }}>
      <FilteringHeader
        onChange={setShowSizeFiltering}
        state={showSizeFiltering}
        startIcon="ri-t-shirt-line"
        endIcon="ri-arrow-down-s-line"
        categoryes={sizes}
      >
        Sizes
      </FilteringHeader>
      <AnimatePresence>
        {showSizeFiltering && (
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
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
              }}
            >
              <Box sx={{ padding: "15px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {filterSize.map((size, index) => (
                    <div key={index}>
                      <SizeItem {...{ size, sizes, setSizes }} />
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

export default SizeFiltering;
