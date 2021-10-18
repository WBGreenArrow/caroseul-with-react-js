import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/Home/App";

import { GlobalStyles } from "../src/styles/global-styles";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <GlobalStyles />
    </React.StrictMode>,
    document.getElementById("root")
);
