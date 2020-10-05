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
  const styleObj = {};

  const sourseArray = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length !== 0);

  sourseArray.forEach(item => {
    const rules = item.split(':');
    const property = rules[0].trim();
    const value = rules[1].trim();

    styleObj[property] = value;
  });

  return styleObj;
}

module.exports = convertToObject;
