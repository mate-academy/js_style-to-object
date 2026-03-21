'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const styleValues = styleDeclarations
    .filter((string) => string.includes(':'))
    .map((value) => value.split(':'));

  return styleValues.reduce((acc, item) => {
    const key = item[0].trim();
    const value = item[1].trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
