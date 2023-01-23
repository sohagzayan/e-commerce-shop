import { Fragment, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReviewStar from "react-rating-stars-component";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { createNewReview } from "../../store/reducerSlice/createProductReviewSlice";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const AddReviewModal = ({
  setOpenAddReview,
  openAddReview,
  id,
  userId,
}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = () => setOpenAddReview(true);
  const handleClose = () => setOpenAddReview(false);
  const [rating, setRating] = useState<any>(0);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state: any) => state.user);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  //   user: req.user._id,
  //   name: req.body.name,
  //   avatar: req.body.avatar,
  //   avatar: req.body.avatar,
  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    console.log("user here", id);
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);
    myForm.set("userId", userId);
    myForm.set("name", user?.name);
    myForm.set("avatar", user?.avatar?.url);
    dispatch(createNewReview(myForm));
    setOpenAddReview(false);
  };

  const optionForEditMode = {
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: 30,
    edit: true,
    emptyIcon: <StarBorderRoundedIcon style={{ fontSize: "35px" }} />,
    halfIcon: <StarHalfRoundedIcon style={{ fontSize: "35px" }} />,
    filledIcon: <StarRateRoundedIcon style={{ fontSize: "35px" }} />,
    value: rating,
  };

  return (
    <Fragment>
      <Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openAddReview}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openAddReview}>
            <Box sx={style}>
              <Typography sx={{ fontFamily: "Poppins", fontSize: "1rem" }}>
                Submit Review
              </Typography>
              <ReviewStar
                onChange={(newValue: any) => setRating(newValue)}
                {...optionForEditMode}
              />
              <textarea
                onChange={(e) => setComment(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid rgba(0,0,0,.1)",
                  outline: "none",
                  padding: "10px",
                  fontSize: "16px",
                }}
                name=""
                id="review"
                cols={30}
                rows={5}
              ></textarea>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <Button
                  onClick={() => setOpenAddReview(false)}
                  sx={{
                    backgroundColor: "rgb(15,23,42,1)",
                    boxShadow:
                      "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                    color: "#fff",
                    padding: "6px 20px",
                    borderRadius: "40px",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    transition: "all 0.3s  ",
                    marginRight: "5px",
                    ":hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "#1E293B",
                      transition: "all 0.3s  ",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => reviewSubmitHandler()}
                  sx={{
                    backgroundColor: "rgb(15,23,42,1)",
                    boxShadow:
                      "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                    color: "#fff",
                    padding: "6px 20px",
                    borderRadius: "40px",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    transition: "all 0.3s  ",
                    marginRight: "5px",
                    ":hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "#1E293B",
                      transition: "all 0.3s  ",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Fragment>
  );
};

export default AddReviewModal;
