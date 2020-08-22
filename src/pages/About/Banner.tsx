import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Divider, Chip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import PetsIcon from '@material-ui/icons/Pets';
import BugReportIcon from '@material-ui/icons/BugReport';
import AdbIcon from '@material-ui/icons/Adb';
import AppleIcon from '@material-ui/icons/Apple';
import CakeIcon from '@material-ui/icons/Cake';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from "src/img/avatar.png";
import "src/css/App.css";

const RAND_ICONS = [<FaceIcon/>, <PetsIcon/>, <BugReportIcon/>, <AdbIcon/>, <AppleIcon/>, <CakeIcon/>];

function Banner() {
  const theme = useTheme();

  const HEADER_TITLE = "WashU ACM";
  const HEADER_SUBTITLE = "We are the Washington University in St. Louis' chapter of ACM, the Association for Computing Machinery.";
  const LIST_OF_FUN_STUFF_WE_DO = [
    "Fireside Chat",
    "Internship Panel",
    "Board Games",
    "Game Jam",
    "Pretend to be Ducks",
  ];

  const getRandomColor = () => {
    const r = Math.floor(Math.random()*100+100);
    const g = Math.floor(Math.random()*100+100);
    const b = Math.floor(Math.random()*100+100);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  const redirectSignup = () => {
    alert("Redirect to Google Forms for signup");
  };

  return (
    <div
      className="About-Banner"
      style={{ marginTop: `${theme.spacing(4)}px`, marginBottom: `${theme.spacing(4)}px`}}
    >
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item className="debug" style={{ padding: theme.spacing(1) }}>
          <img
            src={Avatar}
            style={{
              borderRadius: "50%",
              height: "20vw",
              width: "20vw",
              minHeight: "96px",
              minWidth: "96px",
              maxHeight: "240px",
              maxWidth: "240px",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} sm className="debug">
          <Grid container direction="column">
            <Grid
              item
              className="debug"
              style={{
                marginBottom: theme.spacing(1),
                padding: theme.spacing(1),
              }}
            >
              <Typography variant="h3">{HEADER_TITLE}</Typography>
            </Grid>
            <Grid
              item
              className="debug"
              style={{
                marginBottom: theme.spacing(1),
                padding: theme.spacing(1),
              }}
            >
              <Typography variant="body1">{HEADER_SUBTITLE}</Typography>
            </Grid>
            <Grid item className="debug" style={{marginBottom: theme.spacing(1)}}>
              <Button variant="contained" color="primary" onClick={redirectSignup}>Sign Me Up! ></Button>
            </Grid>
            <Divider />
            <Grid item container direction="row" justify="flex-start">
              <Grid item xs={12} sm={8}>
                {LIST_OF_FUN_STUFF_WE_DO.map((text: string, i: number) => (
                  <Chip
                    key={`skill-chip-${i}`}
                    size="small"
                    icon={RAND_ICONS[Math.floor(Math.random()*RAND_ICONS.length)]}
                    label={text}
                    clickable
                    color="primary"
                    style={{ margin: "4px", color: "#FFFFFF", backgroundColor: getRandomColor() }}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;
