'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const separeteArray = sourceString.trim().split(';');
  let key;
  let value;

  if (sourceString === '') {
    return result;
  }

  separeteArray.map((cssPair) => {
    if (cssPair.length > 1 && cssPair) {
      const cssRule = cssPair.trim();

      if (cssRule.length > 1) {
        key = cssRule.split(':')[0];
        value = cssRule.split(':')[1];
        result[key.trim()] = value.trim();
      }
    }

    return result;
  });

  return result;
}

module.exports = convertToObject;
