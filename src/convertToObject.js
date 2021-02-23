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
  const string = sourceString.split(';');

  return string.reduce((acc, item) => {
    const rule = item.split(':');

    if (rule[0] !== undefined && rule[1] !== undefined) {
      acc[rule[0].trim()] = rule[1].trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
