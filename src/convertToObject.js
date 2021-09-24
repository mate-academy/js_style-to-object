'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const resultObj = {};
  const splitedString = sourceString.split(';')
    .map(expression => expression.split(':'));

  splitedString.forEach(property => {
    if (property[0] && property[1]) {
      const keyCss = property[0].trim();
      const valueCss = property[1].trim();

      resultObj[keyCss] = valueCss;
    }
  });

  return resultObj;
}

module.exports = convertToObject;
