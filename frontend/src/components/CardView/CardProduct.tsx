import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { IProductData } from "../../util/Product";
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

interface CardProductProps {
  product: any;
}

const CardProduct = ({ product }: CardProductProps) => {
  const [quentity, setQuentity] = useState(10);
  return (
    <Box sx={{ marginBottom: "25px", marginTop: "25px" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <img width="100px" src={product.image1} alt="product" />
          </Box>
          <Box sx={{ marginLeft: "30px", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "5px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#6E7886",
                }}
              >
                {product.name}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    border: "2px solid #4CD07D",
                    borderRadius: "6px",
                    padding: "2px 15px",
                    color: "#4CD07D",
                  }}
                >
                  ${product.price}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <i
                style={{
                  color: "#FFDC60",
                  fontSize: "16px",
                  marginRight: "1px",
                }}
                className="ri-star-fill"
              ></i>
              <Typography sx={{ fontSize: "13px" }}>(64)</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#6E7886",
                }}
              >
                Qty 1
              </Typography>
              <Box>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    color: "#1F92CD",
                    fontSize: "15px",
                  }}
                >
                  remove
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardProduct;
