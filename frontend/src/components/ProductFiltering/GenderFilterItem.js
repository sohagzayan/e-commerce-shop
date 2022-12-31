import { Checkbox, ListItem, styled } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";

const GenderFilterItem = ({ gender, setPGender, pGender }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event, gen) => {
    setChecked(event.target.checked);
    if (pGender.includes(gen)) {
      const newCategoris = pGender.filter((c) => c !== gen);
      setPGender(newCategoris);
    } else {
      setPGender((prev) => [...prev, gen]);
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
        id={gender.name}
        checked={checked}
        onChange={(event) => handleChange(event, gender.gender)}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Label sx={{ cursor: "pointer" }} htmlFor={gender.name}>
        {gender.name}
      </Label>
    </ListItem>
  );
};

export default GenderFilterItem;
