import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import userGif from "../../assets/gig images/user.gif";
import { useNavigate } from "react-router-dom";
const GoCreateAccount = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderBottom: "1px solid #e5e2e2",
      }}
    >
      <i
        style={{ fontSize: "5rem", color: "#00000013" }}
        className="ri-user-6-line"
      ></i>
      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
        No account yet?
      </Typography>
      <Box onClick={() => navigate("/register")} sx={{ marginTop: "30px" }}>
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "600",
            borderBottom: "2px solid #1A5DC2",
            cursor: "pointer",
          }}
        >
          CREATE AN ACCOUNT
        </Typography>
      </Box>
    </Box>
  );
};

export default GoCreateAccount;
