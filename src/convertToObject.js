'use strict';

/**
 * Implement convertToObject function:
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = sourceString.split(';').filter(string => string.trim() !== '');

  const result = style.reduce((prev, current) => {
    const [property, value] = current.split(':').map(element => element.trim());

    return {
      ...prev,
      [property]: value,
    };
  }, {});

  return result;
}
module.exports = convertToObject;
