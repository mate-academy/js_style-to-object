'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const styleDeclarations = sourceString
    .trim()
    .split(';')
    .filter((item) => item.trim().length !== 0)
    .map((item) => item.replace('\n', '').trim());

  const stylePairs = styleDeclarations.map((item) => item.split(': '));

  const stylesList = stylePairs.reduce(
    (prev, item) => ({ ...prev, [item[0].trim()]: item[1].trim() }),
    {},
  );

  return stylesList;
}

module.exports = convertToObject;
