'use strict';

/**
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
