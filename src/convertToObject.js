'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArray = sourceString.split(';');
  const declarations = stringArray.map((values) => values.split(':'));
  const pairs = declarations.map((item) => item.map((el) => el.trim()));
  const trimmedPairs = pairs.filter(([key, value]) => key && value);
  const parsedStyles = Object.fromEntries(trimmedPairs);

  return parsedStyles;
}

module.exports = convertToObject;
