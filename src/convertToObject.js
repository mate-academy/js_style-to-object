'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyAndValues = sourceString.split(';');
  const styleObject = {};

  keyAndValues.forEach((element) => {
    const preElement = element.split(':');
    let firstElement = preElement[0];
    let secondElement = preElement[1];

    if (firstElement && secondElement) {
      firstElement = firstElement.trim();
      secondElement = secondElement.trim();
      styleObject[firstElement] = secondElement;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
