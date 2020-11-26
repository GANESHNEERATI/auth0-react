import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Auth0ProviderWithHistory from "./Auth/autho-provider-with-hist";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Route component={App} />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
