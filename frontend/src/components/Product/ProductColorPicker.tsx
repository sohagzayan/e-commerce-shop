import { Box, Typography, styled, Grid } from "@mui/material";
import { useState } from "react";

const Button = styled("button")(({ theme }) => ({}));

const ProductColorPicker = () => {
  const Color = ["#ff497c", "#ff8666", "#8d6abe", "#8d6abe", "#8d6abe"];
  const [activeColor, setActiveColor] = useState(Color[0]);

  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#27272E",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Colors: Black
          </Typography>
        </Box>

        <Box>
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
        </Box>
      </Box>
    </>
  );
};

export default ProductColorPicker;
