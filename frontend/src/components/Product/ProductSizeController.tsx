import { Box, styled } from "@mui/material";
import { Fragment } from "react";

interface Props {
  sizeVariant: string[];
}

const SizeItem = styled("li")(({ theme }) => ({
  width: "2.5rem",
  height: "2.5rem",
  backgroundColor: "#fff",
  color: "#0F172A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  fontWeight: "600",
  textTransform: "uppercase",
  fontSize: "13px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#0F172A",
    color: "#fff",
  },
}));

const ProductSizeController: React.FunctionComponent<Props> = (props) => {
  const { sizeVariant } = props;
  return (
    <Fragment>
      <Box className="productCardWrapper">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {sizeVariant.map((size) => (
            <SizeItem>{size}</SizeItem>
          ))}
        </ul>
      </Box>
    </Fragment>
  );
};

export default ProductSizeController;
