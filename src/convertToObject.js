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
  const convertedToObject = {};
  const splitString = sourceString.split(';');
  const filteredSplitString = splitString.filter(x => x.length > 5)
    .map(x => x.trim()).map(x => x.split(':'))
    .map(x => `${x[0].trim()} ${x[1].trim()}`);

  filteredSplitString.map(x => {
    const property = x.split(' ').shift();

    convertedToObject[property] = x.split(' ').slice(1).join(' ');

    return convertedToObject;
  });

  return convertedToObject;
}

module.exports = convertToObject;
