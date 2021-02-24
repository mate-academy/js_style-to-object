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
  const stringSplittedBySemicolon = sourceString.split(';');

  return stringSplittedBySemicolon.reduce((acc, potentialRule) => {
    const rule = potentialRule.split(':');

    if (rule[0] !== undefined && rule[1] !== undefined) {
      acc[rule[0].trim()] = rule[1].trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
