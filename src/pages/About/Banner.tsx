import React, { useEffect, useState } from "react";
import { Container, Button, Grid, Typography, Chip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import PetsIcon from "@material-ui/icons/Pets";
import BugReportIcon from "@material-ui/icons/BugReport";
import AdbIcon from "@material-ui/icons/Adb";
import AppleIcon from "@material-ui/icons/Apple";
import CakeIcon from "@material-ui/icons/Cake";
import Avatar from "src/img/avatar.png";
import "src/css/App.css";

const RAND_ICONS = [
  <FaceIcon />,
  <PetsIcon />,
  <BugReportIcon />,
  <AdbIcon />,
  <AppleIcon />,
  <CakeIcon />,
];

function Banner() {
  const theme = useTheme();

  const HEADER_TITLE = "WashU ACM";
  const HEADER_SUBTITLE =
    "We are the Washington University in St. Louis' chapter of ACM, the Association for Computing Machinery.";
  const LIST_OF_FUN_STUFF_WE_DO = [
    "Fireside Chat",
    "Internship Panel",
    "Board Games",
    "Game Jam",
    "Pretend to be Ducks",
  ];

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 100 + 100);
    const g = Math.floor(Math.random() * 100 + 100);
    const b = Math.floor(Math.random() * 100 + 100);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  const redirectSignup = () => {
    alert("Redirect to Google Forms for signup");
  };

  return (
    <div
      className="About-Banner debug"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${Avatar})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        style={{
          backgroundImage:
            "radial-gradient(rgba(0, 12, 24, 0.7) 70%, rgba(0, 12, 24, 0.9))",
          height: "100%",
          width: "100%",
        }}
        direction="column"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Container>
            <Grid
              item
              container
              direction="row"
              spacing={0}
              justify="center"
              alignItems="center"
            >
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
                    <Typography color="textSecondary" variant="h1">
                      {HEADER_TITLE}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className="debug"
                    style={{
                      marginBottom: theme.spacing(1),
                      padding: theme.spacing(1),
                    }}
                  >
                    <Typography color="textSecondary" variant="body1">
                      {HEADER_SUBTITLE}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    className="debug"
                    style={{ marginBottom: theme.spacing(1) }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={redirectSignup}
                    >
                      Sign Me Up! >
                    </Button>
                  </Grid>
                  <Grid item container direction="row" justify="flex-start">
                    <Grid item xs={12} sm={8}>
                      {LIST_OF_FUN_STUFF_WE_DO.map(
                        (text: string, i: number) => (
                          <Chip
                            key={`skill-chip-${i}`}
                            size="small"
                            icon={
                              RAND_ICONS[
                                Math.floor(Math.random() * RAND_ICONS.length)
                              ]
                            }
                            label={text}
                            clickable
                            color="primary"
                            style={{
                              margin: "4px",
                              color: "#FFFFFF",
                              backgroundColor: getRandomColor(),
                            }}
                          />
                        )
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;
