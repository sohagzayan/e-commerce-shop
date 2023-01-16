import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { sortFiltering, SortsStateType } from "../../util/FilterOption";
import FilteringFooter from "./FilteringFooter";
import FilteringHeader from "./FilteringHeader";
import SortItem from "./SortFItem";
import { motion, AnimatePresence } from "framer-motion";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";

interface Props {
  sorts: SortsStateType;
  setSorts: React.Dispatch<React.SetStateAction<SortsStateType>>;
}

const SortFiltering: React.FunctionComponent<Props> = (props) => {
  const { sorts, setSorts } = props;
  const [showSortFiltering, setShowSortFiltering] = useState(false);
  const menuRef = useRef();
  const closeHandler = () => {
    setShowSortFiltering(false);
  };
  useClickOutside(menuRef, closeHandler);

  /* Controller */
  const clearFunc = () => {};
  const applyFunc = () => {};

  return (
    <Box ref={menuRef} sx={{ marginRight: "15px", position: "relative" }}>
      <FilteringHeader
        onChange={setShowSortFiltering}
        state={showSortFiltering}
        startIcon="ri-arrow-up-down-line"
        endIcon="ri-arrow-down-s-line"
      >
        {sorts.name}
      </FilteringHeader>
      <AnimatePresence>
        {showSortFiltering && (
          <motion.div
            variants={FilteringMenuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{ position: "relative", zIndex: "99" }}
          >
            <Box
              sx={{
                width: "250px",
                position: "absolute",
                top: "50px",
                right: "0",
                zIndex: "20",
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
                borderRadius: "15px",
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
                  {sortFiltering.map((sort, index) => (
                    <div key={index}>
                      <SortItem
                        {...{ sort, sorts, setSorts, setShowSortFiltering }}
                      />
                    </div>
                  ))}
                </Box>
              </Box>
              {/* <FilteringFooter {...{ clearFunc, applyFunc }} /> */}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SortFiltering;
