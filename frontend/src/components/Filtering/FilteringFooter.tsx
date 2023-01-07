import { Box, Button } from "@mui/material";
import { Fragment } from "react";

interface Props {
  clearFunc: () => void;
  applyFunc: () => void;
}

const FilteringFooter: React.FunctionComponent<Props> = (props) => {
  const { clearFunc, applyFunc } = props;
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#F9FAFB",
          borderRadius: "0 0 20px 20px",
          padding: "10px 20px",
        }}
      >
        <Button
          onClick={clearFunc}
          sx={{
            border: "2px solid #e5e7eb",
            borderRadius: "20px",
            fontWeight: "600",
            color: "#394353",
            fontSize: "14px",
            padding: "5px 20px",
          }}
        >
          Clear
        </Button>
        <Button
          onClick={applyFunc}
          sx={{
            backgroundColor: "#1E293B",
            color: "#E9EBEE",
            fontWeight: "600",
            fontSize: "15px",
            padding: "2px 20px",
            ":hover": {
              backgroundColor: "#1E293B",
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </Fragment>
  );
};

export default FilteringFooter;
