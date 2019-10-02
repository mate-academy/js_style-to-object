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
  const expected = {};
  const propertiesAndKeys = sourceString.split(';');
  propertiesAndKeys.pop();

  propertiesAndKeys.forEach(function(element) {
    const styles = element.split(': ');
    expected[styles[0].trim()] = styles[1];
  });

  return expected;
}

module.exports = convertToObject;
