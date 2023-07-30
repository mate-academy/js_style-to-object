'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString
    .split(';')
    .forEach(row => {
      let [key, value] = row.split(':');

      key = key.replace(/\n| /g, '');
      value && (value = value.trim());

      key && (convertedStyles[key] = value);
    });

  return convertedStyles;
}

module.exports = convertToObject;
