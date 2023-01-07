import { Checkbox, ListItem } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

interface Props {
  size: string;
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
}

const SizeItem: React.FunctionComponent<Props> = (props) => {
  const { size, sizes, setSizes } = props;

  const [checked, setChecked] = useState(false);
  const handleChange = (event: any, size: string) => {
    setChecked(event.target.checked);
    if (sizes.includes(size)) {
      const newColor = sizes.filter((c) => c !== size);
      setSizes(newColor);
    } else {
      setSizes((prev) => [...prev, size]);
    }
  };
  return (
    <ListItem key="index" sx={{ padding: "8px 0px", cursor: "pointer" }}>
      <Checkbox
        className="customCheckbox"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 25,
            color: "#0EA5E9",
          },
          width: "10px",
          height: "25px",
          marginRight: "15px",
        }}
        id={size}
        checked={sizes.includes(size) ? true : checked}
        onChange={(event) => handleChange(event, size)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Label
        sx={{
          cursor: "pointer",
          fontSize: "16px",
          color: "#3B4251 ",
          fontWeight: "500",
          display: "block",
          width: "100%",
          textTransform: "uppercase",
        }}
        htmlFor={size}
      >
        {size}
      </Label>
    </ListItem>
  );
};

export default SizeItem;
