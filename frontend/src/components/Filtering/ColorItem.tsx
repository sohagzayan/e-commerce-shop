import { Checkbox, ListItem } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

interface Props {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  color: {
    id: number;
    name: string;
    value: string;
  };
}

const ColorItem: React.FunctionComponent<Props> = (props) => {
  const { color, colors, setColors } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: any, color: string) => {
    setChecked(event.target.checked);
    if (colors.includes(color)) {
      const newColor = colors.filter((c) => c !== color);
      setColors(newColor);
    } else {
      setColors((prev) => [...prev, color]);
    }
  };

  return (
    <ListItem key="index" sx={{ padding: "8px 0px", cursor: "pointer" }}>
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 25,
            color: "#0EA5E9",
          },
          width: "10px",
          height: "25px",
          marginRight: "15px",
        }}
        id={color.name}
        checked={colors.includes(color.value) ? true : checked}
        onChange={(event) => handleChange(event, color.value)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Label
        sx={{
          cursor: "pointer",
          fontSize: "16px",
          color: "#3B4251 ",
        }}
        htmlFor={color.name}
      >
        {color.name}
      </Label>
    </ListItem>
  );
};

export default ColorItem;
