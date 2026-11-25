'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstStep = sourceString.split(';');
  const seconsStep = firstStep
    .map((word) => word.trim())
    .filter((word) => word !== '');

  const thirdStep = seconsStep.map((word) => {
    const indexOfColon = word.indexOf(':');
    const key = word.slice(0, indexOfColon).trim();
    const value = word.slice(indexOfColon + 1).trim();

    return [key, value];
  });

  return thirdStep.reduce((styles, [key, value]) => {
    return {
      ...styles,
      [key]: value,
    };
  }, {});
}

module.exports = convertToObject;
