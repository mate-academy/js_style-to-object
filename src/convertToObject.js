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
  const arrayFromString = sourceString.split('\n')
    .filter(item => item)
    .map(item => item.split(':'))
    .filter(item => item.length > 1);

  const resultObject = {};

  const arrayOfProperties = arrayFromString.map(item => {
    const propertyName = item[0].trim();
    const value = item[1].slice(0, -1).trim();

    return [propertyName, value];
  });

  arrayOfProperties.forEach(item => {
    resultObject[item[0]] = item[1];
  });

  return resultObject;
}
module.exports = convertToObject;
