import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LoginSidebarHeaderProps {
  setShowLoginSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginSidebarHeader = ({
  setShowLoginSideBar,
}: LoginSidebarHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e2e2",
        padding: "20px",
      }}
    >
      <Box sx={{ textTransform: "uppercase" }}>Sign In</Box>
      <Box
        onClick={() => setShowLoginSideBar(false)}
        sx={{
          textTransform: "uppercase",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <CloseIcon />
        Close
      </Box>
    </Box>
  );
};

export default LoginSidebarHeader;
