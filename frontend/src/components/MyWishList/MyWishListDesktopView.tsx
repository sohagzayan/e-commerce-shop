import { Box, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { productMenu } from "../../util/Product";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography/Typography";

const ButtonAddToCard = styled("button")(({ theme }) => ({
  border: "2px solid #efefef",
  padding: "10px 20px",
  backgroundColor: "transparent",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600",
  transition: "all .3s ease-in",
  ":hover": {
    backgroundColor: "#0d6efd",
    color: "#fff",
    transition: "all .3s ease-in",
  },
}));

const MyWishListDesktopView = () => {
  return (
    <TableContainer component={Paper} sx={{ marginBottom: "60px" }}>
      <Table
        sx={{
          minWidth: 650,
          overflowX: "hidden",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "20px", color: "#292930" }}>
              Product
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "20px", color: "#292930" }}
            >
              Unit Price
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "20px", color: "#292930" }}
            >
              Stock Status
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontSize: "20px", color: "#292930" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productMenu.map((product, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "60px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#F6F7FB",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "30px",
                      }}
                    >
                      <CloseIcon sx={{ fontSize: "15px" }} />
                    </Box>
                    <img width="80px" src={product.image1} alt="" />
                  </Box>
                  <Box>
                    <Typography variant="h6">{product.name}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "18px", color: "#777777", fontWeight: "600" }}
              >
                ${product.price}.99
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: "18px", color: "#777777", fontWeight: "600" }}
              >
                In Stock
              </TableCell>
              <TableCell align="right">
                <ButtonAddToCard>Add to Cart</ButtonAddToCard>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyWishListDesktopView;
