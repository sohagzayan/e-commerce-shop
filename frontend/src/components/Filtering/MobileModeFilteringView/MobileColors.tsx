import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { colorFiltering } from "../../../util/FilterOption";
import ColorItem from "../ColorItem";

interface Props {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}
const MobileColors: React.FunctionComponent<Props> = (props) => {
  const { colors, setColors } = props;
  return (
    <Fragment>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{ fontSize: "22px", color: "#000042", marginBottom: "15px" }}
        >
          Colors
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            {colorFiltering.slice(0, 4).map((color, index) => (
              <ColorItem key={index} {...{ colors, setColors, color }} />
            ))}
          </Grid>
          <Grid item xs={6}>
            {colorFiltering.slice(4, 8).map((color, index) => (
              <ColorItem key={index} {...{ colors, setColors, color }} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MobileColors;
