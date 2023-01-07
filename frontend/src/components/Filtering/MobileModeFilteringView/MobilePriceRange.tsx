import { Fragment } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Button, Slider, Typography } from "@mui/material";

interface Props {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const MobilePriceRange: React.FunctionComponent<Props> = (props) => {
  const { priceRange, setPriceRange } = props;
  const handleChange = (event: Event, newValue: any) => {
    setPriceRange(newValue);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Fragment>
      <Box sx={{ padding: "20px", marginTop: "50px" }}>
        <Typography
          sx={{
            color: "#707580",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Price range
        </Typography>
        <Slider
          sx={{ marginBottom: "20px" }}
          getAriaLabel={() => "Temperature range"}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#707580",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Min price
            </Typography>
            <Button
              sx={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                color: "#727986",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "20px",
                padding: "4px 20px",
                width: "130px",
                border: "2px solid  #e5e7eb",
              }}
              endIcon={<AttachMoneyIcon />}
            >
              343
            </Button>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#707580",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Max price
            </Typography>
            <Button
              sx={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                color: "#727986",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "20px",
                padding: "4px 20px",
                width: "130px",
                border: "2px solid  #e5e7eb",
              }}
              endIcon={<AttachMoneyIcon />}
            >
              343
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default MobilePriceRange;
