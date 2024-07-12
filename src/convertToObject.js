'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const stylesArray = sourceString
    .split(';')
    .map((item) => {
      const [property, ...valueParts] = item.split(':');
      const value = valueParts.join(':').trim();

      return [property.trim(), value];
    })
    .filter((item) => item.length === 2 && item[0] && item[1]);

  const stylesObject = {};

  stylesArray.forEach(([key, value]) => {
    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
