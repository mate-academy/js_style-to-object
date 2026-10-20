'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  return styleDeclarations
    .filter((item) => item.trim().length > 0)
    .map((item) => {
      const [key, value] = item.split(':').map((part) => part.trim());

      return { key, value };
    })
    .filter((part) => part.key && part.value !== undefined)
    .reduce((stylesForObject, { key, value }) => {
      stylesForObject[key] = value;

      return stylesForObject;
    }, {});
}

module.exports = convertToObject;
