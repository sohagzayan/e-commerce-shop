import { Box, Typography, styled, Grid } from "@mui/material";
import { useState } from "react";

const Button = styled("button")(({ theme }) => ({}));

const ProductColorPicker = () => {
  const Color = ["#ff497c", "#ff8666", "#8d6abe"];
  const [activeColor, setActiveColor] = useState(Color[0]);

  return (
    <>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item xs={3}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#27272E",
              fontWeight: "600",
            }}
          >
            Colors:
          </Typography>
        </Grid>

        <Grid
          item
          xs={9}
          sx={{ display: "flex", alignItems: "center", padding: "0 6px" }}
        >
          {Color.map((c, index) => (
            <Button
              key={index}
              className="color_rounded_big "
              onClick={() => setActiveColor(c)}
              sx={{
                backgroundColor: `${c}`,
                "::after": {
                  border: {
                    border: `1px solid ${
                      activeColor === c ? c : "transparent"
                    }`,
                  },
                },
              }}
            ></Button>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductColorPicker;
