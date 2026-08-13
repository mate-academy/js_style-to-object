'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .split(';')
    .filter((item) => item.trim())
    .reduce((stylesObject, item) => {
      const [key, value] = item.split(':');

      stylesObject[key.trim()] = value.trim();

      return stylesObject;
    }, {});

  return styles;
}

module.exports = convertToObject;
