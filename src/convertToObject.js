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
  const styles = {};
  const parameters = sourceString
    .split(';')
    .map(element => element
      .split(':')
      .map(word => word.trim()));

  parameters.forEach(parameter => {
    if (parameter.length !== 1) {
      styles[parameter[0]] = parameter[1];
    };
  });

  return styles;
}

module.exports = convertToObject;
