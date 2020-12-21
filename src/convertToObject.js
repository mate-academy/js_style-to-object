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

  sourceString.split(';')
    .map(elem => elem.trim())
    .filter(elem => elem.length > 0)
    .map(element => {
      const property = element.split(':');
      const key = property[0].trim();
      const value = property[1].trim();

      styleObj[key] = value;
    });

  return styleObj;
}

module.exports = convertToObject;
