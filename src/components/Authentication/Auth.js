// import history from './history';
// import { AUTH_CONFIG } from './authentication-variables';
import settings from '../../config/settings';
import {
  LOCAL_STORAGE_JWT,
  LOCAL_STORAGE_PROFILE_PICTURE,
  IS_LOGGED_IN,
  JWT_EXPIRES_AT,
} from '../../resources/constants';
import * as localStorageHelper from '../../helpers/localStorageHelper';

export default class Auth {
  // TODO: Pending to implement.
  constructor(store) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);

    this.store = store;
    this.authentication = {};
  }

  login() {
    return true;
    // this.authentication.authorize();
  }

  handleAuthentication() {
    this.authentication.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (error) {
        // history.replace('/error');
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in window.localStorage.
    localStorageHelper.setItem(IS_LOGGED_IN, 'true');

    // Set the time that the access token will expire at.
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorageHelper.setItem(JWT_EXPIRES_AT, expiresAt);

    // This is what we need to send to server.
    localStorageHelper.setItem(LOCAL_STORAGE_JWT, authResult.idToken);
  }

  renewSession() {
    this.authentication.checkSession({}, (error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (error) {
        this.logout();
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from window.localStorage
    window.localStorage.removeItem(IS_LOGGED_IN);
    window.localStorage.removeItem(LOCAL_STORAGE_JWT);
    window.localStorage.removeItem(LOCAL_STORAGE_PROFILE_PICTURE);

    this.authentication.logout({
      returnTo: settings.SERVICE.host,
    });

    // navigate to the home route
    // history.replace("/home");
  }

  isAuthenticated() {
    return true;
    /* 
  // Is logged in.
  const isLoggedIn = localStorageHelper.getItem(IS_LOGGED_IN);

  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = localStorageHelper.getItem(JWT_EXPIRES_AT);
  const isValidExpiryTime = new Date().getTime() < expiresAt;

  return isValidExpiryTime && isLoggedIn;
  */
  }
}
