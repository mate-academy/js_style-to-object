'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const semicolon = ';';
  const colon = ':';

  const convertedToObject = sourceString
    .split(semicolon)
    .reduce((styleAccumulator, declaration) => {
      const [property, value] = declaration.trim().split(colon);

      if (value) {
        styleAccumulator[property.trim()] = value.trim();
      }

      return styleAccumulator;
    }, styleObject);

  return convertedToObject;
}

module.exports = convertToObject;
