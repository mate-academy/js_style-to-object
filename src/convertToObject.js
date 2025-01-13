'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  const styleArrs = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part);

  for (const styleArr of styleArrs) {
    const [key, value] = styleArr.split(':').map((part) => part.trim());

    if (key && value) {
      styleObj[key] = value;
    }
  }

  return styleObj;
}

module.exports = convertToObject;
