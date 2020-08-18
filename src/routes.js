import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from "prop-types";
import Auth from './components/Authentication/Auth';
import AuthenticateRoute from './components/Authentication/AuthenticateRoute';
import App from './components/App';

import ErrorPage from './pages/Error/ErrorPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

import OverviewPage from './pages/Overview/OverviewPage';
import ItemsPage from './pages/Items/ItemsPage';
import UsersPage from './pages/Users/UsersPage';
import RatingsPage from './pages/Ratings/RatingsPage';
import RecommendationsPage from './pages/Recommendations/RecommendationsPage';
import DevelopersPage from './pages/Developers/DevelopersPage';
import SettingsPage from './pages/Settings/SettingsPage';
import OrganizationPage from './pages/Organization/OrganizationPage';

import { ROUTES } from './resources/constants';

export default class {
  constructor(store) {
    this.store = store;
    this.auth = new Auth(store);
  }

  handleAuthentication({ location }) {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.auth.handleAuthentication();
    }
  }

  configureRoutes() {
    return (
      <App auth={this.auth}>
        <Switch>
          <AuthenticateRoute
            path="/"
            exact
            component={OverviewPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.ITEMS}
            component={ItemsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.USERS}
            component={UsersPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.RATINGS}
            component={RatingsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.RECOMMENDATIONS}
            component={RecommendationsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.DEVELOPERS}
            component={DevelopersPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.SETTINGS}
            component={SettingsPage}
            auth={this.auth}
          />
          <AuthenticateRoute
            path={ROUTES.ORGANIZATION}
            component={OrganizationPage}
            auth={this.auth}
          />
          <Route path="/error" component={ErrorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </App>
    );
  }
}
