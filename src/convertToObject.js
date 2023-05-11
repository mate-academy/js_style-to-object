'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');

  return arr.reduce((acc, element) => {
    const [key, value] = element.split(':').map(item => item.trim());

    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
