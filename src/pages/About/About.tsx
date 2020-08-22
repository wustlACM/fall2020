import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Divider, Chip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Banner from "./Banner";
import "src/css/App.css";

function About() {
  const theme = useTheme();

  return (
    <div
      className="About"
      style={{ marginTop: `${theme.spacing(4)}px` }}
    >
      <Banner />
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs={3} className="debug" style={{height: "100vh"}}>
          <p> Side Bar Links </p>
          <p> Link to discord </p>
        </Grid>
        <Grid item xs={9} className="debug" style={{height: "100vh", width: "100%"}}>
          <p> Main Content </p>
          <p> Feed of activity posts </p>
          <p> Scrape from Twitter? Do we have a Twitter acc? </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
