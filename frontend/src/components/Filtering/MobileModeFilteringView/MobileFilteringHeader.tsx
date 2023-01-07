import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

interface Props {
  showMobileFiltering: boolean;
  setShowMobileFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileFilteringHeader: React.FunctionComponent<Props> = (props) => {
  const { showMobileFiltering, setShowMobileFiltering } = props;
  return (
    <Fragment>
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
        <span
          onClick={() => setShowMobileFiltering(false)}
          style={{ padding: "20px" }}
        >
          <i style={{ fontSize: "22px" }} className="ri-close-line"></i>
        </span>
        <Typography sx={{ fontSize: "18px", color: "#111827" }}>
          Products filters
        </Typography>
      </Box>
    </Fragment>
  );
};

export default MobileFilteringHeader;
