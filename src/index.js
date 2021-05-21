import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context"
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
