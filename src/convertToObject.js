'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedToArray = sourceString.split(';');

  return convertedToArray.reduce((obj, property) => {
    const style = property.split(':');

    let [key, value] = style;

    key = key.trim();
    value = value ? value.trim() : '';

    if (value !== '') {
      return {
        ...obj,
        [key]: value,
      };
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
