'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const listOfProperties = {};
  const sourceProperties = sourceString
    .split(';')
    .map((property) => property.split(':'))
    .filter((entry) => entry.length > 1);

  sourceProperties.forEach((entry) => {
    const entryKey = entry[0].trim();
    const entryValue = entry[1].trim();

    listOfProperties[entryKey] = entryValue;
  });

  return listOfProperties;
}

module.exports = convertToObject;
