import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import FilteringHeader from "../Filtering/FilteringHeader";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";
import ReviewSortingItem from "./ReviewSortingItem";
import {
  reviewSortFiltering,
  ReviewSortsStateType,
  sortFiltering,
  SortsStateType,
} from "../../util/FilterOption";

const ReviewSorting = ({}: any) => {
  const menuRef = useRef();
  const [sorts, setSorts] = useState<ReviewSortsStateType>(
    reviewSortFiltering[0]
  );
  console.log("sorts", sorts);

  const [showSortFiltering, setShowSortFiltering] = useState(false);
  const closeHandler = () => {
    setShowSortFiltering(false);
  };
  return (
    <Fragment>
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
                    {reviewSortFiltering.map((sort, index) => (
                      <div key={index}>
                        <ReviewSortingItem
                          {...{ sort, sorts, setSorts, setShowSortFiltering }}
                        />
                      </div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Fragment>
  );
};

export default ReviewSorting;
