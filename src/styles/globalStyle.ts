import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5916",
      dark: "#d5450b",
      contrastText: "#fff",
    },
    secondary: {
      main: blue[500],
      dark: blue[600],
    },
  },
});
