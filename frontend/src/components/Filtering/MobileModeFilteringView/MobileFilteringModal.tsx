import { Backdrop, Box, Button, styled, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useRef } from "react";
import useClickOutside from "../../../hocks/OutSideClickCloseMenu";
import { FilteringModalProps } from "../../Types/Types";
import FilteringFooter from "../FilteringFooter";
import MobileCategory from "./MobileCategories";
import MobileColors from "./MobileColors";
import MobileFilteringHeader from "./MobileFilteringHeader";
import MobileOnSaleFilter from "./MobileOnSaleFilter";
import MobilePriceRange from "./MobilePriceRange";
import MobileSizes from "./MobileSizes";
import MobileSortOrder from "./MobileSortOrder";

const FilteringWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  height: "90%",
  color: "#777",
  position: "fixed",
  overflowY: "auto",
  bottom: "0%",
  left: "0px",
  cursor: "pointer",
  zIndex: "99",
}));

const MobileFilteringModal: React.FunctionComponent<FilteringModalProps> = (
  props
) => {
  const {
    priceRange,
    colors,
    sizes,
    sorts,
    selectAllCategory,
    categoryes,
    setCategoryes,
    setPriceRange,
    setColors,
    setSizes,
    setSorts,
    setSelectAllCategory,
    setShowMobileFiltering,
    showMobileFiltering,
    handleResetFiltering,
  } = props;

  const clearFunc = () => {};
  const applyFunc = () => {};

  return (
    <Backdrop
      open={showMobileFiltering}
      sx={{ zIndex: "99", cursor: "pointer" }}
    >
      <AnimatePresence>
        <motion.div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "90%",
            color: "#777",
            position: "fixed",
            overflowY: "auto",
            bottom: "0%",
            left: "0px",
            cursor: "pointer",
            zIndex: "99",
          }}
          animate={{
            y: showMobileFiltering ? "0" : "100%",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 18,
            },
          }}
        >
          <Box>
            <MobileFilteringHeader
              {...{ showMobileFiltering, setShowMobileFiltering }}
            />
            <Box>
              <Box sx={{ padding: "10px 40px" }}>
                <MobileCategory {...{ categoryes, setCategoryes }} />
                <MobileColors {...{ colors, setColors }} />
                <MobileSizes {...{ sizes, setSizes }} />
                <MobilePriceRange {...{ priceRange, setPriceRange }} />
                <MobileSortOrder {...{ sorts, setSorts }} />
                <MobileOnSaleFilter />
              </Box>
              <Box
                sx={{
                  position: "sticky",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: "100%",
                  background: "#fff",
                  padding: "10px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    onClick={handleResetFiltering}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      color: "#fff",
                      fontWeight: "500",
                      backgroundColor: "#22C55E",
                      borderRadius: "20px",
                      border: "1px solid  transparent",
                      ":hover": {
                        border: "1px solid #22C55E",
                        color: " #22C55E",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => setShowMobileFiltering(false)}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      color: "#fff",
                      fontWeight: "500",
                      backgroundColor: "#FF6347",
                      borderRadius: "20px",
                      border: "1px solid  transparent",
                      ":hover": {
                        border: "1px solid #FF6347",
                        color: " #FF6347",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Close
                  </Button>
                </Box>
                {/* <FilteringFooter {...{ clearFunc, applyFunc }} /> */}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Backdrop>
  );
};

export default MobileFilteringModal;
