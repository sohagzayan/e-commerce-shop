import React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Icon,
  ProductControllerWrapper,
  Button,
} from "../../style/Product/ProductController";

interface ControllerProps {
  seIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductController = ({ seIsOpenDetails }: ControllerProps) => {
  return (
    <ProductControllerWrapper className="productCardWrapper">
      <Icon onClick={() => seIsOpenDetails(true)}>
        <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
      </Icon>
      <Button>Add to Card</Button>
      <Icon>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
      </Icon>
    </ProductControllerWrapper>
  );
};

export default ProductController;
