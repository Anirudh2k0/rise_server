import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
// import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
// import { store } from "./redux/store";

const render = ({ url, context }) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </StaticRouter>
  );
};

export { render };
