import { createMuiTheme } from "@material-ui/core/styles";

const PRIMARY_COLOR = "#5E87A7";
const SECONDARY_COLOR = "#58585A";
const SUCCESS_COLOR = "#00E676";
const ERROR_COLOR = "#F44336";

const WHITE_TEXT_COLOR = "#FFFFFF";
const WHITE_BACKGROUND_COLOR = "#FFFFFF";

export const DEFAULT_TEXT_COLOR = "#000000";

// https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// Customize our app-specific theme
const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_TEXT_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: WHITE_TEXT_COLOR,
    },
  },
  typography: {
    body2: {
      fontWeight: 800,
    },
    subtitle2: {
      color: SECONDARY_COLOR,
    },
  },
});

// Moving 'success' and 'error' into primary/secondary to allow
// usage with majority of components (typescript + @material-ui constrain)
export const ErrorTheme = createMuiTheme({
  palette: {
    primary: {
      main: SUCCESS_COLOR,
      contrastText: WHITE_TEXT_COLOR,
    },
    secondary: {
      main: ERROR_COLOR,
      contrastText: WHITE_TEXT_COLOR,
    },
  },
});

// Inverse of ErrorTheme with text-color and backgrouund color inverted
export const LightErrorTheme = createMuiTheme({
  palette: {
    primary: {
      main: WHITE_BACKGROUND_COLOR,
      contrastText: SUCCESS_COLOR,
    },
    secondary: {
      main: WHITE_BACKGROUND_COLOR,
      contrastText: ERROR_COLOR,
    },
  },
});

// Button theming for header
export const HeaderButtonTheme = createMuiTheme({
  palette: {
    action: {
      disabledBackground: "rgba(255, 255, 255, 0.5)",
      disabled: "black",
    },
  },
});

export default AppTheme;
