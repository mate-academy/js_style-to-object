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
    .filter((word) => word.match(/\w+/) !== null);

  for (const propAndVal of propsAndVals) {
    const propAndValArr = propAndVal.split(':');
    const prop = propAndValArr[0].trim();
    const val = propAndValArr[1].trim();

    if (prop.length !== 0) {
      resObj[prop] = val;
    }
  }

  return resObj;
}

module.exports = convertToObject;
