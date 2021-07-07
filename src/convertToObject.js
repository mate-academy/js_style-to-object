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
  const object = {};
  const keys = sourceString.match(/([\w|-]+)(?=:|\s+:)/g);
  const values = sourceString.match(/(?<=:|:\s).+(?=;)/g);
  values.map((value, index) => {
    const allString = value.trim();
    object[keys[index]] = allString;
    return allString;
  });
  return object;
}

module.exports = convertToObject;
