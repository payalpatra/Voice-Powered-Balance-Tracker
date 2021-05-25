import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <SpeechProvider appId="a35c0e13-e126-4b36-9006-f34a4ed9151f" language="en-US">
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
