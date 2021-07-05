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
      const [propName, value] = property
        .split(':');

      if (value !== undefined) {
        return {
          ...acc,
          [propName.trim()]: value.trim(),
        };
      }

      return acc;
    }, {});

module.exports = convertToObject;
