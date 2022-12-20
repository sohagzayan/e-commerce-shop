import { Box, List } from "@mui/material";
import { useState } from "react";
import { filterGender } from "../../util/FilterOption";
import CategoryItem from "./CategoryItem";
import FilterHeader from "./FilterHeader";
import { AnimatePresence, motion } from "framer-motion";

const GenderFilter = () => {
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
    hidden: (index: number) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
    show: (index: number) => ({
      x: 0,
      transition: {
        duration: (index + 1) * 0.1,
      },
    }),
  };

  return (
    <Box sx={{ marginBottom: "50px" }}>
      <FilterHeader
        title="Gender"
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
            <List>
              {filterGender.map((gender, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={menuItemAnimation}
                >
                  <CategoryItem key={index} categories={gender} />
                </motion.div>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default GenderFilter;
