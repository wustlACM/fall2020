import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import Banner from "./Banner";
import LifeSimulation from "./LifeSimulation";
import "src/css/App.css";

function About() {
  const theme = useTheme();

  return (
    <div className="About">
      <Banner />
      {/*
      <div
        style={{
          height: "100vw",
          width: "100%",
        }}
      >
        <LifeSimulation />
      </div>
      */}
    </div>
  );
}

export default About;
