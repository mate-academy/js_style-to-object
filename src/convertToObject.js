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
  const props = sourceString.split(';')
    .map(prop => prop.split(':').map(x => x.trim()));

  const styles = {};

  for (const prop of arrOfProps) {
    if (prop[0] && prop[1]) {
      newObj[prop[0]] = prop[1];
    }
  }

  return newObj;
}

module.exports = convertToObject;
