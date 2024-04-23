'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const props = sourceString.split(';');

  for (const i of props) {
    const [propName, propValue] = i.split(':');

    if (propName && propValue) {
      result[propName.trim()] = propValue.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
