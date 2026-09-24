'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const temp = sourceString.split(';').map((word) => {
    const [key, value] = word.split(':');

    if (key && value) {
      return [key.trim(), value.trim()];
    }
  });
  
  temp.forEach((item) => {
    if (item) {
      stylesObject[item[0]] = item[1];
    }
  }
  );

  return stylesObject;
}

module.exports = convertToObject;
