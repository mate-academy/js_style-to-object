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
  return sourceString
    .split(';')
    .map(word => {
      return word.trim();
    })
    .filter((element) => element !== '')
    .sort()
    .reduce((acc, declaration) => {
      let [prop, value] = declaration.split(':');

      prop = prop.trim();
      value = value.trim();

      return {
        ...acc,
        [prop]: value,
      };
    }, {});
}

module.exports = convertToObject;
