'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleRules = sourceString.trim().split(';');
  const stylesObject = styleRules.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split(':');

    if (key && value) {
      accumulator[key.trim()] = value.trim();
    }

    return accumulator;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
