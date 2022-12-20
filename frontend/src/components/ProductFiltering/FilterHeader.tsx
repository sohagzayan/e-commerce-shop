import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FilterProps {
  title: string;
  setShowOption: React.Dispatch<React.SetStateAction<boolean>>;
  showOption: boolean;
}

const Filter = ({ title, setShowOption, showOption }: FilterProps) => {
  return (
    <Box sx={{ marginBottom: "10px", paddingBottom: "5px" }}>
      <Box
        sx={{ cursor: "pointer" }}
        onClick={() => setShowOption((state) => !state)}
      >
        <Box
          className={showOption ? "filterHeader active" : "filterHeader"}
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "space-between",
            padding: "5px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "500",
              textTransform: "uppercase",
              color: "#27272E",
            }}
          >
            {title} Hee hee e
          </Typography>
          <Typography variant="h5">
            <motion.div animate={showOption ? { rotate: -90 } : { rotate: 0 }}>
              <ExpandMoreIcon />
            </motion.div>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
