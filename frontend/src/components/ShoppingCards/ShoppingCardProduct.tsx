import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { IProductData } from "../../util/Product";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

interface Props {
  item: any;
  increaseQuantity: (id: string, quantity: number, stock: number) => void;
  decreaseQuantity: (id: string, quantity: number) => void;
  deleteCardItem: (id: string) => void;
}

const QyButton = styled("button")(({ theme }) => ({
  width: "35px",
  height: "35px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#fff",
  cursor: "pointer",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
}));

const ShoppingCardProduct: React.FunctionComponent<Props> = (props) => {
  const { name, product, image, price, stock, quantity } = props.item;
  console.log("form card product", props.item);

  const { increaseQuantity, decreaseQuantity, deleteCardItem } = props;
  const matches = useMediaQuery("(min-width:790px)");

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          marginBottom: "30px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "25px",
        }}
      >
        <Box sx={{ marginRight: "20px", position: "relative" }}>
          <img height={150} src={image} alt="po" />
          <span
            onClick={() => deleteCardItem(product)}
            style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#22C55E",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i style={{ fontSize: "1.5rem" }} className="ri-close-fill"></i>
          </span>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "5px 0",
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
            }}
          >
            <Grid item xs={matches ? 6 : 12}>
              <Box>
                <Typography sx={{ color: "#0F172A", marginBottom: "5px" }}>
                  {name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      borderRight: "1px solid #e5e7eb",
                      color: "#0F172A",
                      marginRight: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <i
                      style={{ marginRight: "6px" }}
                      className="ri-paint-fill"
                    ></i>
                    Black
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#0F172A",
                    }}
                  >
                    <i
                      style={{ marginRight: "6px" }}
                      className="ri-t-shirt-fill"
                    ></i>
                    2xl
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3} sx={{ display: matches ? "block" : "none" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <QyButton
                  onClick={() => increaseQuantity(product, quantity, stock)}
                >
                  <AddRoundedIcon sx={{ fontSize: "16px" }} />
                </QyButton>
                <Typography sx={{ fontSize: "20px", margin: "0 10px" }}>
                  {quantity}
                </Typography>
                <QyButton onClick={() => decreaseQuantity(product, quantity)}>
                  <RemoveRoundedIcon sx={{ fontSize: "16px" }} />
                </QyButton>
              </Box>
            </Grid>
            <Grid sx={{ display: matches ? "block" : "none" }} item xs={3}>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Typography
                  sx={{
                    color: "#22C55E",
                    border: "2px solid #22C55E",
                    padding: "0 10px",
                    borderRadius: "6px",
                    display: "inline-block",
                  }}
                >
                  ${price}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: matches ? "none" : "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ minWidth: 70 }}>
              <Select
                sx={{ height: "30px" }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <Typography
              sx={{
                color: "#22C55E",
                border: "2px solid #22C55E",
                padding: "0 10px",
                borderRadius: "6px",
                display: "inline-block",
              }}
            >
              ${price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: "inline-flex",
                alignItem: "center",
                color: "#0F172A",
                border: "1px solid #e5e7eb",
                padding: "4px 15px",
                borderRadius: "20px",
                fontSize: "13px",
              }}
            >
              <i style={{ marginRight: "5px" }} className="ri-check-fill"></i>
              In Stock
            </Typography>
            <Typography
              sx={{
                display: "inline-flex",
                alignItem: "center",
                color: "#0F172A",
                border: "1px solid #e5e7eb",
                padding: "4px 15px",
                borderRadius: "20px",
                fontSize: "13px",
              }}
            >
              SubTotal: ${quantity * price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
export default ShoppingCardProduct;
