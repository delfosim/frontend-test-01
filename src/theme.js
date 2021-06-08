import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(255, 135, 0)",
      light: "rgb(245, 246, 250)",
    },
    secondary: {
      main: "#fff",
      dark: "#3E3837",
      light: "gray",
    },
    navBar: {
      background:
        "linear-gradient( 183deg , rgb(255, 80, 15), rgb(255, 135, 0))",
    },
    error: {
      main: red.A400,
      light: "#e57878",
    },
    background: {
      default: "rgb(245, 246, 250)",
    },
    text: {
      primary: "#3E3837",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiToggleButton: {
      root: {
        fontSize: "12px",
        height: "3em",
        borderRadius: 0,
        "&:hover": {
          color: "rgb(255, 135, 0)",
          borderColor: "rgb(255, 135, 0)",
        },
        "&$selected": {
          backgroundColor: "rgb(255, 135, 0)",
          color: "white",
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: "12px",
        "&$disabled": {
          backgroundColor: "rgb(245, 246, 250)",
        },
      },
    },
  },
});

export default theme;
