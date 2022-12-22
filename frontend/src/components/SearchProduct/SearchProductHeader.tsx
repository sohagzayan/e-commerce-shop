import { Box, Backdrop, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

const SearchProductHeader = () => {
  return (
    <Box sx={{ paddingY: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "13px" }}>24 Result Found</Typography>
        </Box>
        <Box>
          <Button sx={{ color: "#777", textTransform: "capitalize" }}>
            View All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchProductHeader;
