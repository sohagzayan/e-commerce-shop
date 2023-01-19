import { Box, Typography } from "@mui/material";
import { fontWeight } from "@mui/system";
import { Link } from "react-router-dom";
import MetaData from "../../util/MetaData";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import "./Deshboart.css";
const Sidebar = () => {
  return (
    <Box>
      <Box sx={{ padding: { md: "30px", lg: "50px" } }}>
        <Box sx={{ marginBottom: "40px" }}>
          <Link to="/">
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#5C68C5",
                fontWeight: "600",
                fontSize: "22px",
              }}
            >
              Drive.
            </Typography>
          </Link>
        </Box>
        <Box className="Dashboard_linkWrapper">
          <Link className="d_link" to="/admin/dashboard">
            <p
              style={{
                color: "#000517",
                fontFamily: "Poppins",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{
                  color: "#A1A7DE",
                  fontSize: "22px",
                  marginRight: "10px",
                }}
                className="ri-dashboard-line"
              ></i>{" "}
              Dashboard
            </p>
          </Link>
          <Link className="d_link" to="">
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon sx={{ color: "#A1A7DE" }} />}
              defaultExpandIcon={<ImportExportIcon sx={{ color: "#A1A7DE" }} />}
            >
              <TreeItem
                sx={{ color: "#000517", fontFamily: "Poppins" }}
                nodeId="1"
                label="Products"
              >
                <Link to="/admin/products">
                  <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                </Link>

                <Link to="/admin/product">
                  <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                </Link>
              </TreeItem>
            </TreeView>
          </Link>
          <Link className="d_link" to="/admin/orders">
            <p
              style={{
                color: "#000517",
                fontFamily: "Poppins",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{
                  color: "#A1A7DE",
                  fontSize: "22px",
                  marginRight: "10px",
                }}
                className="ri-file-list-3-line"
              ></i>
              Orders
            </p>
          </Link>{" "}
          <Link className="d_link" to="/admin/users">
            <p
              style={{
                color: "#000517",
                fontFamily: "Poppins",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{
                  color: "#A1A7DE",
                  fontSize: "22px",
                  marginRight: "10px",
                }}
                className="ri-user-line"
              ></i>{" "}
              Users
            </p>
          </Link>
          <Link className="d_link" to="/admin/reviews">
            <p
              style={{
                color: "#000517",
                fontFamily: "Poppins",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{
                  color: "#A1A7DE",
                  fontSize: "22px",
                  marginRight: "10px",
                }}
                className="ri-edit-line"
              ></i>
              Reviews
            </p>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
