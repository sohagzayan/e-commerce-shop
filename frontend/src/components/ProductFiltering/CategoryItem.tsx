import { Checkbox, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

interface CategoryItemProps {
  categories: string;
}

const CategoryItem = ({ categories }: CategoryItemProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Label sx={{ cursor: "pointer" }} htmlFor={categories}>
        {categories}
      </Label>
    </ListItem>
  );
};

export default CategoryItem;
