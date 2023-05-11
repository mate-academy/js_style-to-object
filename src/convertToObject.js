'use strict';

function convertToObject(sourceString) {
  const cssArray = sourceString.split(';');
  const cssObj = {};

  cssArray.forEach(css => {
    const [key, value] = css.split(':');

    if (key && value) {
      cssObj[key.trim()] = value.trim();
    }
  });

  return cssObj;
}

module.exports = convertToObject;
