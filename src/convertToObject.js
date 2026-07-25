'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const masOfSplit = sourceString.split(';');
  const masOfKeysAndDeterm = masOfSplit.map((KeysAndDeterm) => {
    return KeysAndDeterm.split(':');
  });

  let key = '';
  let value = '';
  const cssObject = {};

  masOfKeysAndDeterm.forEach((oneLine) => {
    if (oneLine === undefined || oneLine.length <= 0 || oneLine.length > 2) {
      return;
    }

    key = oneLine[0].trim();

    if (oneLine.length === 2) {
      value = oneLine[1].trim();
    }

    if (key === '') {
      return;
    }

    cssObject[key] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
