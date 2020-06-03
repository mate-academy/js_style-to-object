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
  const styleObject = {};
  const stylesList = sourceString.split(';');

  stylesList.map(style => {
    const property = style.split(':');

    if (property[1]) {
      styleObject[property[0].trim()] = property[1].trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
