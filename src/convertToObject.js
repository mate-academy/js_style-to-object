'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 * an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};
  const propsAndVals = sourceString
    .split(';')
    .filter((word) => word.match(/\w+/) !== null)
    .map(item => item.split(':'));

  for (const propAndVal of propsAndVals) {
    const [prop, val] = propAndVal;

    newObj[prop.trim()] = val.trim();
  }

  return newObj;
}

module.exports = convertToObject;
