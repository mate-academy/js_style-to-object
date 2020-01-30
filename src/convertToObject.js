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

const convertToObject = (sourceString) =>
  sourceString
    .split(';')
    .reduce((acc, property) => {
      const parts = property.split(':');

      if (parts[1] !== undefined) {
        acc[parts[0].trim()] = parts[1].trim();
      }

      return acc;
    }, {});

module.exports = convertToObject;
