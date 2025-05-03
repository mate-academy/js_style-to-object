'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString.split(';');
  const result = {};
  for (const element of elements) {
    const keyValue = element.split(':').filter(Boolean);
    if (keyValue[0] && keyValue[1]) {
      result[keyValue[0].trim()] = keyValue[1].trim();
    };
  };

  return result;
};
module.exports = convertToObject;
