'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(row => row.split(':'))
    .filter(rule => rule.length === 2)
    .map(([prop, value]) =>
      [prop.trim(), value.trim()]
    )
    .reduce((convertList, [prop, value]) => (
      {
        ...convertList,
        ...{ [prop]: value },
      }
    ), {});
}

module.exports = convertToObject;
