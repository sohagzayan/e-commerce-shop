import { Box, List } from "@mui/material";
import { useState } from "react";
import { filterGender } from "../../util/FilterOption";
import CategoryItem from "../Filtering/CategoryItem";
import FilterHeader from "./FilterHeader";
import { AnimatePresence, motion } from "framer-motion";
import GenderFilterItem from "./GenderFilterItem";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const GenderFilter = ({ setPRating, pRating }) => {
  const [showOption, setShowOption] = useState(true);

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

  const menuItemAnimation = {
    hidden: (index) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
    show: (index) => ({
      x: 0,
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
  };

  const option = {
    edit: true,
    color: "rgba(53,119,238,0.42)",
    activeColor: "#3577F0",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
    emptyIcon: <StarBorderRoundedIcon sx={{ fontSize: "40px" }} />,
    halfIcon: <StarHalfRoundedIcon sx={{ fontSize: "40px" }} />,
    filledIcon: <StarRateRoundedIcon sx={{ fontSize: "40px" }} />,
    value: parseInt(pRating),
  };

  return (
    <Box sx={{ marginBottom: "50px" }}>
      <FilterHeader
        title="Rating"
        setShowOption={setShowOption}
        showOption={showOption}
      />
      <AnimatePresence>
        {showOption && (
          <motion.div
            // variants={menuAnimation}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            style={{
              marginTop: "-10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <List>
              <motion.div>
                <ReviewStar
                  {...option}
                  onChange={(newValue) => setPRating(newValue)}
                />
              </motion.div>
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default GenderFilter;
