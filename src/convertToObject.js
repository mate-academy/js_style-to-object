'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssClass = {};
  const sourceArr = sourceString.split(';');

  sourceArr.forEach((elem) => {
    const LastIndOfKey = elem.indexOf(':');
    const key = elem.slice(0, LastIndOfKey).trim();

    if (key.length > 1) {
      cssClass[key] = elem.slice(LastIndOfKey + 1).trim();
    }
  });

  return cssClass;
}

module.exports = convertToObject;
