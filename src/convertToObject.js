'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedArr = sourceString
        .split(';')
    .map(propertys => propertys.split(':')
      .map(values => values.trim()))
    .filter(element => element.length > 1);

  return Object.fromEntries(formatedArr);
}

module.exports = convertToObject;
