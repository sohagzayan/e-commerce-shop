import { Backdrop, Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { filterCategories } from "../../util/FilterOption";
import { FilteringProps } from "../Types/Types";
import CategoryItem from "./CategoryItem";

const MobileFiltering: React.FunctionComponent<FilteringProps> = (props) => {
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
  } = props;
  return (
    <Fragment>
      <Backdrop open={true} sx={{ zIndex: "99" }}>
        <Box>
          <Box
            sx={{
              backgroundColor: "#F6F7FB",
              borderRadius: "5px",
              width: "90%",
              height: "100vh",
              color: "#777",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #e5e7eb",

                marginBottom: "30px",
                width: "50%",
                justifyContent: "space-between",
              }}
            >
              <span style={{ padding: "20px" }}>
                <i style={{ fontSize: "22px" }} className="ri-close-line"></i>
              </span>
              <Typography sx={{ fontSize: "18px", color: "#111827" }}>
                Products filters
              </Typography>
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Box></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Backdrop>
    </Fragment>
  );
};

export default MobileFiltering;
