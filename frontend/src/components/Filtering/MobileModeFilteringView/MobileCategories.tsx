import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { filterCategories } from "../../../util/FilterOption";
import CategoryItem from "../CategoryItem";

interface Props {
  categoryes: string[];
  setCategoryes: React.Dispatch<React.SetStateAction<string[]>>;
}
const MobileCategory: React.FunctionComponent<Props> = (props) => {
  const { categoryes, setCategoryes } = props;
  return (
    <Fragment>
      <Box>
        <Typography
          sx={{ fontSize: "22px", color: "#000042", marginBottom: "15px" }}
        >
          Categories
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            {filterCategories.slice(0, 4).map((category, index) => (
              <CategoryItem
                key={index}
                {...{ categoryes, setCategoryes, category }}
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            {filterCategories.slice(4, 8).map((category, index) => (
              <CategoryItem
                key={index}
                {...{ categoryes, setCategoryes, category }}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MobileCategory;
