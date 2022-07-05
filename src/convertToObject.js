'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 * exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfValues = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property.length > 0);

  const answ = arrOfValues.reduce((prev, prop) => {
    const razd = prop.indexOf(':');
    const key = prop.slice(0, razd).trim();
    const value = prop.slice(razd + 1).trim();

    return {
      ...prev,
      [key]: value,
    };
  }, {});

  return answ;
}

module.exports = convertToObject;
