'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arryaOfStyle = sourceString.split(';');

  const result = arryaOfStyle.reduce((acc, element) => {
    if (!element) {
      return acc;
    }

    const key = element.split(':')[0].trim();
    const value = element.split(':').slice(1).join(':').trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
