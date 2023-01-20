import { Box, Container, Grid, styled } from "@mui/material";
import { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import poster1 from "../../assets/poster-01.png";
import poster2 from "../../assets/poster-02.png";
import "./Home.css";

const Fashion = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              overflow: "hidden",
              marginBottom: "30px",
            }}
          >
            <div
              onClick={() => navigate("/shopping")}
              className="img-hover-zoom"
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={poster1}
                alt=""
              />
              <div className="innerContent">
                <h3 className="title">
                  Rich sound, <br /> for less.
                </h3>
                <span className="subTitle">
                  Collections <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ overflow: "hidden", marginBottom: "30px" }}
          >
            <div
              onClick={() => navigate("/shopping")}
              className="img-hover-zoom"
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={poster2}
                alt=""
              />
              <div className="innerContent innerContent-Left">
                <span className="subTitle">
                  50% Offer In Winter <i className="ri-arrow-right-line"></i>
                </span>
                <h3 className="title">
                  Get VR <br /> Reality Glass
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Fashion;
