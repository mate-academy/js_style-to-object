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

  const withoutSpace = sourceString
    .split(':')
    .map((el) => el.trim());

  const modifiedSourceString = withoutSpace
    .join(':')
    .split(';')
    .map((el) => el.trim())
    .join(';');
  const propertyEntries = modifiedSourceString
    .split(';')
    .map((el) => el.split(':'))
    .filter((el) => el.length >= 2);

  const stylesObject = Object.fromEntries(propertyEntries);

  return stylesObject;
}

module.exports = convertToObject;
