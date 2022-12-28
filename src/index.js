import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const container = document.getElementById("root");
const root = createRoot(container);


toast.info("For the first request, it can take from 30sec to 1min, 'cause of Render.com")

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
