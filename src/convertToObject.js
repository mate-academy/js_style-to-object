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

  const divideProp = (strings) => {
    const newStr = strings.split(':');

    return {
      [newStr[0].trim()]: newStr[1].trim(),
    };
  };

  const resultAraay = properties.map(divideProp);

  return resultAraay.reduce((pre, item) => (
    {
      ...pre,
      ...item,
    }), {});
}

module.exports = convertToObject;
