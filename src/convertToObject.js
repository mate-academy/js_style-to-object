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

  propertiesAndKeys.forEach(element => {
    const styles = element.trim().split(':');
    expected[styles[0]] = styles[1].trim();
  });

  return expected;
}

module.exports = convertToObject;
