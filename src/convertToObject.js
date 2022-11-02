'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultPropertyObject = {};

  const sourceStringArray = sourceString
    .replace(/\s+/g, ' ')
    .split(';')
    .filter(str => str !== ' ');

  sourceStringArray.forEach(elem => {
    const resPropObjKey = elem
      .slice(0, elem.indexOf(':'))
      .trim();

    const resPropObjValue = elem
      .slice(elem.indexOf(':') + 1)
      .trim();

    resultPropertyObject[resPropObjKey] = resPropObjValue;
  });

  return resultPropertyObject;
}

module.exports = convertToObject;
