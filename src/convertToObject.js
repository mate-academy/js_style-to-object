'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationList = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean);

  const stylesObject = declarationList.reduce(
    (stylesAccumulator, declaration) => {
      const [key, value] = declaration.split(':');

      if (key && value) {
        stylesAccumulator[key.trim()] = value.trim();
      }

      return stylesAccumulator;
    },
    {},
  );

  return stylesObject;
}

module.exports = convertToObject;
