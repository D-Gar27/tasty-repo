import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Router from "./routes";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#219657",
    },
    secondary: {
      main: "#e4d81e",
    },
  },
};

const defaultTheme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
