'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrWithStyles = sourceString.split(';');
  const objWithCssRules = {};

  arrWithStyles.forEach((rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      objWithCssRules[property] = value;
    }
  });

  return objWithCssRules;
}

module.exports = convertToObject;
