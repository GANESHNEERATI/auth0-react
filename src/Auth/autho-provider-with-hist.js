import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "reactjsconsutling-dev.us.auth0.com";
  const clientId = "3x5OLPbHEV5fwcogtpe3tpQ5XKGNTy3Z";

  const history = useHistory();

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
//process.env.REACT_APP_DOMAIN
//process.env.REACT_APP_AUTH0_CLIENTID
