import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { filterSize } from "../../../util/FilterOption";
import SizeItem from "../SizeItem";

interface Props {
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
}

const MobileSizes: React.FunctionComponent<Props> = (props) => {
  const { sizes, setSizes } = props;
  return (
    <Fragment>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{ fontSize: "22px", color: "#000042", marginBottom: "15px" }}
        >
          Size
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            {filterSize.slice(0, 4).map((size, index) => (
              <SizeItem key={index} {...{ sizes, setSizes, size }} />
            ))}
          </Grid>
          <Grid item xs={6}>
            {filterSize.slice(4, 8).map((size, index) => (
              <SizeItem key={index} {...{ sizes, setSizes, size }} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MobileSizes;
