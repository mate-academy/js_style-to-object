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
  const properties = sourceString
    .replace(/\n */g, '')
    .split(';')
    .filter(item => item.length > 0);

  return properties.reduce((result, currentElement) => {
    const [key, value] = currentElement.split(':');

    result[key.trim()] = value.trim();

    return result;
  }, {});
}

module.exports = convertToObject;
