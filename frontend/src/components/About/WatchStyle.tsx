import { Box, Grid } from "@mui/material";
import React from "react";
import watchImage from "../../assets/image1.webp";
const WatchStyle = () => {
  // mx-auto grid lg:grid-cols-2 col-span-1 gap-6
  return (
    <div className="watchStyle">
      <Grid container className="container_c  ">
        <Grid item xs={1} lg={6}>
          <h2 className="text-4xl dark:text-own-white font-bold text-own-secondary underline border-own-primary ">
            Extraordinary watch style
          </h2>
          <h5 className="text-2xl text-own-secondary dark:text-own-text-dark font-semibold mt-8">
            Your Passion is Watch Products
          </h5>
          <p className="text-own-secondary text-lg leading-10 dark:text-own-text-dark py-5">
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget condimentum rhoncus.Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus. Curabitur ullamcorper
            ultricies nisi.
          </p>
          <ul className="list-disc text-own-text-light dark:text-own-text-dark ml-4">
            <li className="mb-2">Latest Designs</li>
            <li className="mb-2">Brands that Matter</li>
            <li className="mb-2">Quality that Inspires</li>
          </ul>
        </Grid>
        <Grid item xs={1} lg={6}>
          <img src={watchImage} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default WatchStyle;
