import { Box, List } from "@mui/material";
import { useState } from "react";
import { filterCategories } from "../../util/FilterOption";
import CategoryItem from "../Filtering/CategoryItem";
import FilterHeader from "./FilterHeader";
import { AnimatePresence, motion } from "framer-motion";

const CategoryFilter = ({ setPCategory, pCategory }) => {
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

  return (
    <Box sx={{ paddingBottom: "30px" }}>
      <Box>
        <FilterHeader
          title="Categories"
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
                {filterCategories.map((categories, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={menuItemAnimation}
                  >
                    <CategoryItem
                      categories={categories}
                      pCategory={pCategory}
                      setPCategory={setPCategory}
                    />
                  </motion.div>
                ))}
              </List>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default CategoryFilter;
