import { Box, Button, Container } from "@mui/material";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilteringMenuAnimation } from "../framerMotion/framerMotion";

interface Props {
  showShopSearchBar: boolean;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setShowShopSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopSearchBar: React.FunctionComponent<Props> = (props) => {
  const { showShopSearchBar, setShowShopSearchBar, keyword, setKeyword } =
    props;

  const handleClearSearchBox = () => {
    setKeyword("");
  };
  return (
    <Fragment>
      <motion.div>
        <Box sx={{}}>
          <form
            action=""
            style={{
              width: "330px",
              height: "40px",
              padding: "0 10px",
              position: "relative",
              backgroundColor: "#F8FAFC",
              borderRadius: "6px",
            }}
          >
            <input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                outline: "none",
                fontSize: "16px",
                color: "#0F172A",
              }}
              type="text"
              placeholder="Search by name"
            />
            {keyword.length > 0 && (
              <span
                onClick={handleClearSearchBox}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "95%",
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                <i className="ri-close-fill"></i>
              </span>
            )}
          </form>
        </Box>
      </motion.div>
    </Fragment>
  );
};

export default ShopSearchBar;
