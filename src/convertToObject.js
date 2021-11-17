'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parseSourceString = sourceString.split(';');

  return parseSourceString.reduce((result, style) => {
    if (style.trim()) {
      const [key, value] = style.split(':');

      result[key.trim()] = value.trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
