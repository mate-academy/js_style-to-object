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
  const solutionArr = sourceString.split(';');
  const solutionObj = {};

  for (let i = 0; i < solutionArr.length; i++) {
    const solutionObjProp = solutionArr[i].trim().split(': ');
    solutionObj[solutionObjProp[0]] = solutionObjProp[1];
  }

  return solutionObj;
}

module.exports = convertToObject;
