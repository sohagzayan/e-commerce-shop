import { Fragment, useState } from "react";
import ReviewSorting from "./ReviewSorting";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, styled } from "@mui/material";
import Review from "./Review";
import {
  reviewSortFiltering,
  ReviewSortsStateType,
} from "../../util/FilterOption";

const ReviewControllersss = styled(Box)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#fff",
  width: "900px",

  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: "10px",
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "95%",
    md: "90%",
    lg: 1000,
  },
  height: "90%",
  overflowY: "scroll",
  bgcolor: "background.paper",
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
  borderRadius: "10px",
};

const AllReviewController = ({
  setOpenAllReview,
  openAllReview,
  data,
}: any) => {
  const handleOpen = () => setOpenAllReview(true);
  const handleClose = () => setOpenAllReview(false);

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAllReview}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAllReview}>
          <Box sx={style}>
            <Box
              sx={{
                position: "sticky",
                top: "0",
                left: "0",
                backgroundColor: "#fff",
                zIndex: "50",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  position: "relative",
                  borderBottom: "1px solid #e5e7eb",
                  marginBottom: "10px",
                }}
              >
                <Box sx={{ padding: "10px 20px" }}>
                  <Typography
                    sx={{
                      color: "rgb(51,65,85,1)",
                      fontFamily: "Poppins",
                      fontSize: "1.2rem",
                    }}
                  >
                    View all reviews
                  </Typography>
                  <span
                    onClick={() => setOpenAllReview(false)}
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <i
                      style={{ fontSize: "1.5rem" }}
                      className="ri-close-line"
                    ></i>
                  </span>
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #e5e7eb",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(17,24,39,1)",
                  }}
                >
                  <i
                    style={{ marginRight: "5px" }}
                    className="ri-star-fill"
                  ></i>{" "}
                  4,87 · 142 Reviews
                </Typography>
                <ReviewSorting {...{}} />
              </Box>
            </Box>
            <Box sx={{ padding: "10px 20px" }}>
              <Grid container spacing={4}>
                {data.reviews &&
                  data?.reviews.map((rev: any, index: any) => (
                    <Grid key={index} item xs={12} md={6}>
                      <Review rev={rev} />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default AllReviewController;
