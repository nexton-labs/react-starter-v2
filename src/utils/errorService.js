const Logger = require('js-logger');

// eslint-disable-next-line react-hooks/rules-of-hooks
Logger.useDefaults();
/* istanbul ignore next */
if (process.env.NODE_ENV === 'production') {
  Logger.setLevel(Logger.OFF);
}

export default function logErrors(message, file, line = 'N/A', col = 'N/A') {
  Logger.error(
    `An Error Occurred!!: message[${message}], file[${file}], line[${line}], col[${col}]`,
  );
  return false;
}

// Log unhandled errors
window.addEventListener('error', logErrors);
