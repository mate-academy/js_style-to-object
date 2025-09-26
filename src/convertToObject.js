'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const strVal = sourceString.split(';');
  const cssElements = strVal.reduce((cssParams, current) => {
    const [key, value] = current.split(':');

    if (key && value && key.trim().length > 0 && value.trim().length > 0) {
      cssParams[key.trim()] = value.trim();
    }

    return cssParams;
  }, {});

  return cssElements;
}

module.exports = convertToObject;
