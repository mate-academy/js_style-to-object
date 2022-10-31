'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  const sourceStringArray = sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .filter(str => str !== ' ');

  sourceStringArray.forEach(elem => {
    const resObjKey = elem.slice(0, elem.indexOf(':')).trim();
    const resObjValue = elem.slice(elem.indexOf(':') + 1).trim();

    resultObject[resObjKey] = resObjValue;
  });

  return resultObject;
}

module.exports = convertToObject;
