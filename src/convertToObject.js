'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    throw new TypeError(
      `Invalid argument: expected a string, but received ${typeof sourceString}`,
    );
  }

  const propertisWithoutSpace = sourceString.split(':').map((el) => el.trim());
  const modifiedSourceString = propertisWithoutSpace
    .join(':')
    .split(';')
    .map((el) => el.trim())
    .join(';');
  const propertyEntries = modifiedSourceString
    .split(';')
    .map((el) => el.split(':'))
    .filter((el) => el.length >= 2);

  const resulr = Object.fromEntries(propertyEntries);

  return resulr;
}

module.exports = convertToObject;
