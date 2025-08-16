'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationLines = sourceString.split(';');
  const nonEmptyLines = declarationLines
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const pairs = nonEmptyLines.map((line) => {
    const idx = line.indexOf(':');

    if (idx === -1) {
      return null;
    }

    const left = line.slice(0, idx).trim();
    const right = line.slice(idx + 1).trim();

    if (left.length === 0) {
      return null;
    }

    return { propertyName: left, propertyValue: right };
  });

  const validPairs = pairs.filter((p) => p && p.propertyName.length > 0);

  const stylesObject = validPairs.reduce((acc, p) => {
    acc[p.propertyName] = p.propertyValue;

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
