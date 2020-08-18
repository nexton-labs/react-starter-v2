const PROD = '';
const DEV = '';

const settings = {
  SERVICE: {
    prod: PROD,
    dev: DEV,
    baseurl: DEV,
    host: '',
  },
  USE_SEGMENT: false,
};

if (process.env.NODE_ENV === 'local') {
  settings.SERVICE.baseurl = DEV;
  settings.SERVICE.host = 'http://localhost:8080';
  settings.USE_SEGMENT = false;
}

if (process.env.NODE_ENV === 'development') {
  settings.SERVICE.baseurl = DEV;
  settings.SERVICE.host = '';
  settings.USE_SEGMENT = false;
}

if (process.env.NODE_ENV === 'production') {
  settings.SERVICE.baseurl = PROD;
  settings.SERVICE.host = '';
  settings.USE_SEGMENT = true;
}

export default settings;
