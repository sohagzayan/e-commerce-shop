import { Backdrop, Box, styled } from "@mui/material";
import { Fragment, useState } from "react";
import { FilteringModalProps, FilteringProps } from "../../Types/Types";
import FilteringFooter from "../FilteringFooter";
import FilteringHeader from "../FilteringHeader";
import MobileFiltering from "../MobileFiltering";
import MobileCategory from "./MobileCategories";
import MobileColors from "./MobileColors";
import MobileFilteringHeader from "./MobileFilteringHeader";
import MobileOnSaleFilter from "./MobileOnSaleFilter";
import MobilePriceRange from "./MobilePriceRange";
import MobileSizes from "./MobileSizes";
import MobileSortOrder from "./MobileSortOrder";
import { motion, AnimatePresence } from "framer-motion";
import MobileFilteringModal from "./MobileFilteringModal";

const MobileViewFiltering: React.FunctionComponent<FilteringModalProps> = (
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
    showMobileFiltering,
    setShowMobileFiltering,
    handleResetFiltering,
  } = props;

  return (
    <Fragment>
      <Box sx={{ marginBottom: "30px", position: "relative" }}>
        <FilteringHeader
          onChange={setShowMobileFiltering}
          state={showMobileFiltering}
          endIcon="ri-arrow-down-s-line"
          startIcon="ri-equalizer-line"
        >
          Products filters (3)
        </FilteringHeader>
        <AnimatePresence>
          <motion.div>
            <MobileFilteringModal
              {...{
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
              }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Fragment>
  );
};

export default MobileViewFiltering;
