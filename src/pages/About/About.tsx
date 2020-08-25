import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Banner from "./Banner";
import "src/css/App.css";

function About() {
  const theme = useTheme();

  return (
    <div className="About">
      <Banner />
    </div>
  );
}

export default About;
