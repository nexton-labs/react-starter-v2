export const DEFAULT_USER_VALID_ID_PATHS = ['_id', 'id'];
export const DEFAULT_PAGINATION_QUERY = {
  page: 0,
  limit: 10,
  sort: 'ASC',
  filter: '',
};
export const LOCAL_STORAGE_JWT = 'jwt';
export const IS_LOGGED_IN = 'isLoggedIn';
export const JWT_EXPIRES_AT = 'expiresAt';
export const LOCAL_STORAGE_USER_INFO = 'userInfo';
export const LOCAL_STORAGE_PROFILE_PICTURE = 'profilePicture';

export const ACTION_TYPES = {
  ADD: 'Add',
  UPDATE: 'Update',
  DELETE: 'Delete',
};

export const RESPONSE_STATUS = {
  VALID: 'valid',
  INVALID: 'invalid',
};

export const DEFAULT_SEARCH_FILTERS = {
  criteria: '',
  date: '',
  page: 0,
  limit: 10,
  totalPages: 1,
};

export const DEFAULT_PAGINATION_QUERY_FOR_USERS = {
  page: 0,
  limit: 10,
  sort: 'ASC',
  filter: '',
};

export const UNKNOWN_ERROR = 'Unknown error.';

export const COLORS = {
  RED: '#e74a3b',
  GREEN: '#256600',
  BLUE: '#4e73df',
  GREY: '#758199',
};

export const HOST_URL = 'https://local:8080.com';

export const SUCCESS_SAVE_MESSAGE = 'Changes saved successfully!';

export const ERROR_SAVE_MESSAGE =
  'An error occurred while saving the information. Please try again in a few minutes.';

export const NOTIFICATION_TIMEOUT = 2000;
export const GRAPH_DATE_REFERENCE_FORMAT = 'MMM YY';
export const GRAPH_TITLE_DATE_FORMAT = 'DD MMM YYYY';

export const ROUTES = {
  ROOT: '/',
  OVERVIEW: '/overview',
  ITEMS: '/items',
  USERS: '/users',
  RATINGS: '/ratings',
  RECOMMENDATIONS: '/recommendations',
  DEVELOPERS: '/developers',
  SETTINGS: '/settings',
  ORGANIZATION: '/organization',
};
