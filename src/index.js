import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./App/components/users";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Users />);

reportWebVitals();
