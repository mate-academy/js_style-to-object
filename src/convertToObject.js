'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssClass = {};
  const sourceArr = sourceString.split('');

  let sourseArr = sourceArr.filter((item, i) => {
    if (item === '\n' || (item === ' ' && sourceArr[i - 1] === ' ')) {
      return false;
    }

    return true;
  });

  sourseArr = sourseArr.join('');
  sourseArr = sourseArr.split(';');

  sourseArr.forEach((elem) => {
    const LastIndOfKey = elem.indexOf(':');
    const key = elem.slice(0, LastIndOfKey).trim();

    if (key.length > 1) {
      cssClass[key] = elem.slice(LastIndOfKey + 1).trim();
    }
  });

  return cssClass;
}

module.exports = convertToObject;
