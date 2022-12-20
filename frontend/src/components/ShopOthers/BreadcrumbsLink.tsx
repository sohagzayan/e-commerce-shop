import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import { Link, Breadcrumbs, Typography } from "@mui/material";

const BreadcrumbsLink = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/"
      >
        <HomeOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        MUI
      </Link>
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        <WhatshotOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Core
      </Link>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.primary"
      >
        <GrainOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Breadcrumb
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsLink;
