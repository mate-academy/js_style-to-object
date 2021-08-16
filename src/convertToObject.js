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
  const arrayStyles = sourceString.split('\n');

  arrayStyles.forEach(element => {
    if (element.includes(':')) {
      objectStyles[`${element.split(':')[0].trim()}`]
      = `${element.split(':')[1].slice(0, -1).trim()}`;
    }
  });

  return objectStyles;
}

module.exports = convertToObject;
