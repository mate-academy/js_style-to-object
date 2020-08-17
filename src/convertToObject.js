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
  const res = sourceString.replace(/[\r\n]/g, '').split(';');
  const result = {};

  res.map(x => x.split(':')).filter(x => x.length > 1).forEach(property => {
    result[property[0].trim()] = property[1].trim();
  });

  return result;
}

module.exports = convertToObject;
