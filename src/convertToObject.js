'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strWithStyles = sourceString.split(';');
  const objectCss = {};

  strWithStyles.forEach((rule) => {
    const [key, value] = rule.split(':').map((part) => part.trim());

    if (key && value) {
      objectCss[key] = value;
    }
  });

  return objectCss;
}

module.exports = convertToObject;
