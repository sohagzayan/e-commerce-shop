import { Box, Button, Slider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import useClickOutside from "../../hocks/OutSideClickCloseMenu";
import FilteringHeader from "./FilteringHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";

function valuetext(value: number) {
  return `${value}°C`;
}

interface Props {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const PriceFiltering: React.FunctionComponent<Props> = (props) => {
  const { priceRange, setPriceRange } = props;
  const modalRef = useRef(null);
  const [showPriceFiltering, setShowPriceFiltering] = useState(false);

  const closeHandler = () => {
    setShowPriceFiltering(false);
  };
  useClickOutside(modalRef, closeHandler);

  const handleChange = (event: Event, newValue: any) => {
    setPriceRange(newValue);
  };

  const handleClearFilter = () => {
    setPriceRange([0, 2000]);
  };

  return (
    <Box ref={modalRef} sx={{ marginRight: "15px", position: "relative" }}>
      <FilteringHeader
        onChange={setShowPriceFiltering}
        state={showPriceFiltering}
        startIcon="ri-money-dollar-circle-line"
      >
        {priceRange[0]}$ - {priceRange[1]}$
      </FilteringHeader>
      <AnimatePresence>
        {showPriceFiltering && (
          <motion.div
            variants={FilteringMenuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{ position: "relative", zIndex: "99" }}
          >
            <Box
              sx={{
                width: "400px",
                position: "absolute",
                top: "50px",
                left: "0",
                zIndex: "90",
                backgroundColor: "#fff",
                boxShadow:
                  "0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
              }}
            >
              <Box sx={{ padding: "20px" }}>
                <Typography
                  sx={{
                    color: "#707580",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Price range
                </Typography>
                <Slider
                  sx={{ marginBottom: "20px" }}
                  getAriaLabel={() => "Temperature range"}
                  value={priceRange}
                  min={0}
                  max={2000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#707580",
                        fontWeight: "600",
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      Min price
                    </Typography>
                    <Button
                      sx={{
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#727986",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "20px",
                        padding: "4px 20px",
                        width: "130px",
                        border: "2px solid  #e5e7eb",
                      }}
                      endIcon={<AttachMoneyIcon />}
                    >
                      {priceRange[0]}
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#707580",
                        fontWeight: "600",
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      Max price
                    </Typography>
                    <Button
                      sx={{
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#727986",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "20px",
                        padding: "4px 20px",
                        width: "130px",
                        border: "2px solid  #e5e7eb",
                      }}
                      endIcon={<AttachMoneyIcon />}
                    >
                      {priceRange[1]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default PriceFiltering;
