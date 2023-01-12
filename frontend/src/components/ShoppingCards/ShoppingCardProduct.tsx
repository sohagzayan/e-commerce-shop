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
import { Fragment, useState } from "react";
import { IProductData } from "../../util/Product";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

interface Props {
  data: IProductData;
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
  const { name, image1, price } = props.data;
  const [quantity, setQuantity] = useState(1);
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
        <Box sx={{ marginRight: "20px" }}>
          <img height={150} src={image1} alt="po" />
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
                <QyButton>
                  <AddRoundedIcon sx={{ fontSize: "16px" }} />
                </QyButton>
                <Typography sx={{ fontSize: "20px", margin: "0 10px" }}>
                  {quantity}
                </Typography>
                <QyButton>
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
                value={quantity}
                onChange={() => setQuantity((state) => state + 1)}
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
          <Box>
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
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
export default ShoppingCardProduct;
