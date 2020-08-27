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
import MatrixTextType from "src/components/MatrixTextType";
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
    "We are the Washington University in St. Louis' chapter of ACM, the Association for Computing Machinery. Every semester, we organize all sorts of events: Tuesday/Thursday Tech Talks, Programming Competition, Intership Panel, Course Registration Discussion, and Fireside Chat with CSE department faculties. We welcome every student with interest in computing or computer science. Come and join us to get notified of our news and upcoming events!";
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
    window.open("https://forms.gle/bu3n1JQdP1WQew6W6", "_blank");
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
            "radial-gradient(rgba(0, 12, 24, 0.8) 70%, rgba(0, 12, 24, 0.95))",
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
                    <MatrixTextType
                      className="monospaceRoboto"
                      seconds={2}
                      color="textSecondary"
                      variant="h1"
                      text={HEADER_TITLE}
                    />
                  </Grid>
                  <Grid
                    item
                    className="debug"
                    style={{
                      marginBottom: theme.spacing(1),
                      padding: theme.spacing(1),
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    <MatrixTextType
                      className="monospaceRoboto"
                      seconds={3}
                      color="textSecondary"
                      variant="body1"
                      text={HEADER_SUBTITLE}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={9}>
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
                    <Grid
                      item
                      xs={12}
                      sm={3}
                      className="debug"
                      style={{ marginBottom: theme.spacing(1) }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        onClick={redirectSignup}
                      >
                        Sign Me Up! >
                      </Button>
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
