import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#ea1d2c",
          color: "#fff",
          ":hover": {
            backgroundColor: "red",
          },
        },
        outlined: {
          color: "#ea1d2c",
          borderColor: "#ea1d2c",
          ":hover": {
            color: "red",
            borderColor: "red",
            backgroundColor: "#ff000008",
          },
        },
        text: {
          color: "#ea1d2c",
          ":hover": {
            color: "red",
            backgroundColor: "#ff000008",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#ea1d2c",
          fontWeight: "bold",
        },
        subtitle1: {
          color: "#ccc",
        },
        subtitle2: {
          maxWidth: 800,
          textAlign: "center",
          fontSize: "15px",
        },
        h6: {
          fontWeight: "bold",
        },
      },
    },
  },
});
