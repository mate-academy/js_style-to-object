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
  let sources = sourceString.split(';');

  sources = sources.map(source => source.split(':'));
  sources = sources.filter(source => source.length > 1);

  const result = {};

  sources.map(source => (result[source[0].trim()] = source[1].trim()));

  return result;
}

module.exports = convertToObject;
