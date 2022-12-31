import { Checkbox, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

const CategoryItem = ({ categories, pCategory, setPCategory }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event, categories) => {
    setChecked(event.target.checked);
    if (pCategory.includes(categories)) {
      const newCategoris = pCategory.filter((c) => c !== categories);
      setPCategory(newCategoris);
    } else {
      setPCategory((prev) => [...prev, categories]);
    }
  };

  return (
    <ListItem key="index" sx={{ padding: "8px 0px", cursor: "pointer" }}>
      <Checkbox
        sx={{
          width: "10px",
          height: "20px",
          marginRight: "15px",
        }}
        id={categories}
        checked={checked}
        onChange={(event) => handleChange(event, categories)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Label sx={{ cursor: "pointer" }} htmlFor={categories}>
        {categories}
      </Label>
    </ListItem>
  );
};

export default CategoryItem;
