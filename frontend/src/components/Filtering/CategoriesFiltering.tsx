import { Box, Button, Checkbox, ListItem, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import { Label } from "../../style/ProductFiltering/ProductFiltering";
import { filterCategories } from "../../util/FilterOption";
import CategoryItem from "./CategoryItem";
import FilteringHeader from "./FilteringHeader";
import { AnimatePresence, motion } from "framer-motion";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";
import FilteringFooter from "./FilteringFooter";

interface Props {
  categoryes: string[];
  selectAllCategory: string[];
  setCategoryes: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectAllCategory: React.Dispatch<React.SetStateAction<string[]>>;
}

const CategoriesFiltering: React.FunctionComponent<Props> = (props) => {
  const { categoryes, setCategoryes, selectAllCategory, setSelectAllCategory } =
    props;
  const [showCategoryFiltering, setShowCategoryFiltering] =
    useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const modalRef = useRef();
  const closeHandler = () => {
    setShowCategoryFiltering(false);
  };
  useClickOutside(modalRef, closeHandler);

  return (
    <Box ref={modalRef} sx={{ marginRight: "15px", position: "relative" }}>
      <FilteringHeader
        categoryes={categoryes}
        setCategoryes={setCategoryes}
        onChange={setShowCategoryFiltering}
        state={showCategoryFiltering}
        startIcon="ri-file-list-3-line"
        endIcon="ri-arrow-down-s-line"
      >
        Categories
      </FilteringHeader>
      <AnimatePresence>
        {showCategoryFiltering && (
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
                  {/* <ListItem
                    key="index"
                    sx={{
                      padding: "12px 0px",
                      cursor: "pointer",
                      borderBottom: "1px solid #e5e7eb",
                      marginBottom: "6px",
                    }}
                  >
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 30 },
                        width: "15px",
                        height: "25px",
                        marginRight: "15px",
                      }}
                      id="allCategories"
                      checked={checked}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Label
                      sx={{
                        cursor: "pointer",
                        fontSize: "17px",
                        color: "#3B4251",
                      }}
                      htmlFor="allCategories"
                    >
                      All Categories
                    </Label>
                  </ListItem> */}
                  {filterCategories.map((category: string, index: number) => (
                    <div key={index}>
                      <CategoryItem
                        category={category}
                        categoryes={categoryes}
                        setCategoryes={setCategoryes}
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
  );
};

export default CategoriesFiltering;
