import Header from "../components/Header/Header";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MyWishListDesktopView from "../components/MyWishList/MyWishListDesktopView";
import MyWishListMobileView from "../components/MyWishList/MyWishListMobileView";

const MyWishList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Box sx={{ marginBottom: "30px" }}>
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            My Wish List on eTrade
          </Typography>
        </Box>
        <Box>
          {matches ? <MyWishListMobileView /> : <MyWishListDesktopView />}
        </Box>
      </Container>
    </>
  );
};

export default MyWishList;
