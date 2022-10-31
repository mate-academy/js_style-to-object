'use strict';

/**
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
    const resObjKey = elem
      .slice(0, elem.indexOf(':'))
      .trim();

    const resObjValue = elem
      .slice(elem.indexOf(':') + 1)
      .trim();

    resultObject[resObjKey] = resObjValue;
  });

  return resultObject;
}

module.exports = convertToObject;
