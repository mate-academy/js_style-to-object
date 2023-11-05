'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  const styledObject = splittedString.reduce((obj, styles) => {
    const [property, value] = styles.split(':');

    if (value) {
      return {
        ...obj,
        [property.trim()]: value.trim(),
      };
    }

    return obj;
  }, {});

  return styledObject;
}
module.exports = convertToObject;
