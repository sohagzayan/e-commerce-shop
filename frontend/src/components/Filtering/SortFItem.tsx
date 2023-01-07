import { Checkbox, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Label } from "../../style/ProductFiltering/ProductFiltering";
import { SortsStateType } from "../../util/FilterOption";

interface Props {
  sort: SortsStateType;
  sorts: SortsStateType;
  setSorts: React.Dispatch<React.SetStateAction<SortsStateType>>;
  setShowSortFiltering?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortFItem: React.FunctionComponent<Props> = (props) => {
  const { sort, sorts, setSorts, setShowSortFiltering } = props;

  const handleSortOrder = (newSort: SortsStateType) => {
    setSorts(newSort);
    setShowSortFiltering && setShowSortFiltering(false);
  };

  return (
    <ListItem
      onClick={() => handleSortOrder(sort)}
      key="index"
      sx={{ padding: "8px  0px", cursor: "pointer" }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          fontSize: "16px",
          color: "#3B4251 ",
        }}
      >
        {sort.name}
      </Typography>
    </ListItem>
  );
};

export default SortFItem;
