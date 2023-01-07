import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./util/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { store } from "./store/store";
import { SkeletonTheme } from "react-loading-skeleton";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const option = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...option}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AlertProvider>
      </Provider>
    </SkeletonTheme>
  </ThemeProvider>
);
