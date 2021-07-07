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
    .reduce((styleObj, styles) => {
      const [prop, value] = styles.split(':');

      if (prop !== undefined && value !== undefined) {
        return {
          ...styleObj,
          [prop.trim()]: value.trim(),
        };
      }

      return styleObj;
    }, {});
}

module.exports = convertToObject;
