import { Box, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AnimatePresence, motion } from "framer-motion";

interface UsdAndLanProps {
  menu: string[];
}

const UsdAndLan = ({ menu }: UsdAndLanProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageantUsd, setPageantUsd] = useState(menu[0]);

  const menuAnimation = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Box sx={{ marginLeft: "16px" }}>
      <Box sx={{ position: "relative" }}>
        <Typography
          onClick={() => setShowMenu((state) => !state)}
          sx={{
            fontSize: "14px",
            background: "#fff",
            border: "1px solid #f0f0f0",
            display: "inline-flex",
            alignItems: "center",
            padding: "5px 10px",
            fontWeight: "600",
            borderRadius: "6px",
            transition: "all .3s ease-in",
            cursor: "pointer",
            ":hover": {
              transition: "all .3s ease-in",
              boxShadow: "0 16px 32px 0 rgb(0 0 0 / 6%)",
            },
          }}
        >
          {pageantUsd}
          <KeyboardArrowDownIcon />
        </Typography>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="dropDownExtraInfo"
            >
              <ul>
                {menu?.map((u, index) => (
                  <li
                    onClick={() => {
                      setPageantUsd(u);
                      setShowMenu(false);
                    }}
                    key={index}
                  >
                    {u}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default UsdAndLan;
