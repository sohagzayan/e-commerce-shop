import { Checkbox, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

interface Props {
  categoryes: string[];
  setCategoryes: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
}

const CategoryItem: React.FunctionComponent<Props> = (props) => {
  const { categoryes, setCategoryes, category } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = (event: any, category: string) => {
    setChecked(event.target.checked);
    if (categoryes.includes(category.toLocaleLowerCase())) {
      const newCategoris = categoryes.filter((c) => c !== category);
      setCategoryes(newCategoris);
    } else {
      setCategoryes((prev) => [...prev, category.toLocaleLowerCase()]);
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
        id={category}
        checked={categoryes.includes(category) ? true : checked}
        onChange={(event) => handleChange(event, category)}
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
          textTransform: "capitalizes",
        }}
        htmlFor={category}
      >
        {category}
      </Label>
    </ListItem>
  );
};

export default CategoryItem;
