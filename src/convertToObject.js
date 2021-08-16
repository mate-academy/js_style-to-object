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

const convertToObject = sourceString => Object.fromEntries(sourceString
  .split(';')
  .map(element => element.split(':')
    .map(property => property.trim()))
  .filter(item => item.length > 1));

module.exports = convertToObject;
