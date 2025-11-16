'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStyleString = sourceString.split(';');
  const clearStyleString = newStyleString.filter((clearString) => {
    return clearString.trim().length > 0;
  });
  const stylePairs = clearStyleString.map((declaration) => {
    const [key, value] = declaration.split(':');

    return {
      key: key.trim(),
      value: value.trim(),
    };
  });

  const lastFiltering = stylePairs.reduce((styleObject, { key, value }) => {
    styleObject[key] = value;

    return styleObject;
  }, {});

  return lastFiltering;
}

module.exports = convertToObject;
