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
    return word.split(':').map((part) => part.trim());
  });

  return thirdStep.reduce((obj, item) => {
    obj[item[0]] = item[1];

    return obj;
  }, {});
}

module.exports = convertToObject;
