'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const pairs = declarations
    .map((el) => el.split(':'))
    .filter((el) => el.length > 1);

  const initialValue = {};

  const stylesObject = pairs.reduce(
    (temporaryObj, [key, value]) => ({
      ...temporaryObj,
      [key.trim()]: value.trim(),
    }),
    initialValue,
  );

  return stylesObject;
}

module.exports = convertToObject;
