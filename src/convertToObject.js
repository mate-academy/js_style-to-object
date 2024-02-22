'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in)
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in)
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayStyle = sourceString.split(';');
  const objectStyles = {};

  arrayStyle.forEach(element => {
    if (element.trim() !== '') {
      const value = element.split(':').map(a => a.trim());

      objectStyles[value[0]] = value[1];
    }
  });

  return objectStyles;
}

module.exports = convertToObject;
