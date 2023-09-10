'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObj = {};
  const propsAndVals = sourceString
    .split(';')
    .filter((word) => word.match(/\w+/) !== null)
    .map(item => item.split(':'));

  for (const propAndVal of propsAndVals) {
    if (propAndVal.length === 2) {
      const [prop, val] = propAndVal;

      resObj[prop.trim()] = val.trim();
    }
  }

  return resObj;
}

module.exports = convertToObject;
