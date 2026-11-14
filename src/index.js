import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import hidayatFavicon from "./assests/images/hidayat-favicon.png";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

document
  .querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]')
  .forEach((iconLink) => iconLink.remove());

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.href = hidayatFavicon;
document.head.appendChild(faviconLink);

const appleTouchIconLink = document.createElement("link");
appleTouchIconLink.rel = "apple-touch-icon";
appleTouchIconLink.href = hidayatFavicon;
document.head.appendChild(appleTouchIconLink);

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
