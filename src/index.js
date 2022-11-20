import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App/app";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);

reportWebVitals();
