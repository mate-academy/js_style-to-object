'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .filter((line) => line.includes(':'));

  const objectStyle = {};

  const divideProp = (strings) => {
    const newStr = strings.split(':');

    objectStyle[[newStr[0].trim()]] = newStr[1].trim();
  };

  properties.map(divideProp);

  return objectStyle;
}

module.exports = convertToObject;
