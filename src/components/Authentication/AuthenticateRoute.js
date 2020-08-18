import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthenticateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    return rest.auth.isAuthenticated();
  };

  const isAuthorized = () => {
    const auth = true;
    return auth; // At the moment We're not going to handle Roles so all calls will be Authorized.
  };

  const checkAuthorization = properties => {
    return isAuthorized() ? (
      <Component {...properties} />
    ) : (
      rest.auth.isAuthenticated()
    );
  };

  return (
    <Route
      {...rest}
      render={properties =>
        isAuthenticated() ? checkAuthorization(properties) : rest.auth.login()
      }
    />
  );
};

AuthenticateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
};

export default AuthenticateRoute;
