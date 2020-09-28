'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectStyles = {};
  const arrayStyles = sourceString.split(';');

  for (const item of arrayStyles) {
    const selector = item.split(':');

    if (selector[0] && selector[1]) {
      objectStyles[selector[0].trim()] = selector[1].trim();
    }
  }

  return objectStyles;
}

module.exports = convertToObject;
