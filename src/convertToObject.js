'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // eslint-disable-next-line no-debugger
  if (!sourceString) {
    return {};
  }

  const styleToObject = {};
  const partsOfExpresions = sourceString.split(';');

  partsOfExpresions.forEach((part) => {
    const index = part.indexOf(':');

    const name = part.substring(0, index).trim();
    const value = part.substring(index + 1).trim();

    if (name && value) {
      styleToObject[name] = value;
    }
  });

  return styleToObject;
}

module.exports = convertToObject;
