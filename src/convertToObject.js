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
  const arrayOfCssRules = sourceString.split(';');

  const mappedCssRules = arrayOfCssRules.map(element =>
    element.split(':'));

  const cssRules = mappedCssRules.reduce((acc, startItem) => {
    if (startItem[0] && startItem[1]) {
      acc[startItem[0].trim()] = startItem[1].trim();
    }

    return acc;
  }, {});

  return cssRules;
}

module.exports = convertToObject;
