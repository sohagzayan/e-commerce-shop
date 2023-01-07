import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { sortFiltering, SortsStateType } from "../../../util/FilterOption";
import SortFiltering from "../SortFiltering";
import SortFItem from "../SortFItem";

interface Props {
  sorts: SortsStateType;
  setSorts: React.Dispatch<React.SetStateAction<SortsStateType>>;
}

const MobileSortOrder: React.FunctionComponent<Props> = (props) => {
  const { sorts, setSorts } = props;

  return (
    <Fragment>
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{ fontSize: "22px", color: "#000042", marginBottom: "15px" }}
        >
          Sort Order
        </Typography>

        <Box>
          <SortFiltering {...{ sorts, setSorts }} />
        </Box>
        {/* <Grid container>
          <Grid item xs={6}>
            {sortFiltering.slice(0, 4).map((sort, index) => (
              <SortFItem key={index} {...{ sorts, setSorts, sort }} />
            ))}
          </Grid>
          <Grid item xs={6}>
            {sortFiltering.slice(4, 8).map((sort, index) => (
              <SortFItem key={index} {...{ sorts, setSorts, sort }} />
            ))}
          </Grid>
        </Grid> */}
      </Box>
    </Fragment>
  );
};

export default MobileSortOrder;
