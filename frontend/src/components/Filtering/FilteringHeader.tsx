import { Typography, Button } from "@mui/material";
import React, { Fragment } from "react";

interface Props {
  state: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  startIcon?: string;
  endIcon?: string;
  categoryes?: string[];
  setCategoryes?: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilteringHeader: React.FunctionComponent<Props> = (props) => {
  const {
    onChange,
    state,
    categoryes,
    setCategoryes,
    children,
    startIcon,
    endIcon,
  } = props;
  return (
    <Fragment>
      <Button
        onClick={() => onChange((state) => !state)}
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          border:
            state || categoryes?.length
              ? "1px solid #32B2EC"
              : "1px solid rgba(209,213,219,1)",
          padding: "5px 17px",
          borderRadius: "20px",
          backgroundColor:
            state || categoryes?.length ? "#F0F9FF" : "transparent",
          cursor: "pointer",
          color: "#777",
          textTransform: "capitalize",
        }}
      >
        <i style={{ marginRight: "5px" }} className={startIcon}></i>

        <Typography sx={{ fontSize: "14px" }}>{children}</Typography>
        {categoryes && categoryes.length > 0 ? (
          <span
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#0EA5E9",
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            <i className="ri-close-line"></i>
          </span>
        ) : (
          <i style={{ marginLeft: "10px" }} className={endIcon}></i>
        )}
      </Button>
    </Fragment>
  );
};

export default FilteringHeader;
