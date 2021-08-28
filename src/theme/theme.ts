import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  // coloring
  palette: {
    primary: {
      main: "#8163E3",
    },
    secondary: {
      main: "#2ECC71",
    },
  },

  // font settings
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
});
