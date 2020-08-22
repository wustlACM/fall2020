import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Typography, Grid, Button } from "@material-ui/core";
import { useTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { HeaderButtonTheme, DEFAULT_TEXT_COLOR } from "src/theme";
import LogoSmall from "src/img/logo192.png";

function Header({
  tabs,
  links,
  active,
}: {
  tabs: string[];
  links: string[];
  active?: string;
}) {
  const theme = useTheme();
  const history = useHistory();

  // CSS styling
  const headerTabStyle = {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: "0%",
    borderBottom: "solid 1px",
    color: theme.palette.primary.contrastText,
  };

  return (
    <div
      className="Header"
      id="app-header"
      style={{
        top: "0px",
        left: "0px",
        width: "100%",
        position: "fixed",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        style={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(1),
        }}
      >
        <Grid item>
          <Avatar alt="Brain Logo" src={LogoSmall} />
        </Grid>
        {tabs.map((tab: string, i: number) => (
          <Grid item key={`header-tab-${i}`}>
            <MuiThemeProvider theme={HeaderButtonTheme}>
              <Button
                style={headerTabStyle}
                variant={tab === active ? "outlined" : "text"}
                disabled={tab === active}
                onClick={() => history.push(links[i])}
              >
                {tab}
              </Button>
            </MuiThemeProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Header;
