'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const sourceStringSplitted = sourceString.split('\n');

  const keyAndValues = sourceStringSplitted.map((el) => {
    let [key, value] = el.split(':');

    if ([key, value].length < 2) {
      return null;
    }

    key = key.trim();
    value = value.trim().replace(/;$/, '');

    return [key, value];
  });

  for (let i = 0; i < keyAndValues.length; i++) {
    if (keyAndValues[i][0] && keyAndValues[i][1]) {
      res[keyAndValues[i][0]] = keyAndValues[i][1];
    }
  }

  return res;
}

module.exports = convertToObject;
