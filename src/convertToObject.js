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
  const arrayOfStyles = {};

  sourceString.split(';')
    .map(property => property
      .split(':')
      .map(item => item.trim())).forEach(rule => {
      if (rule[0].length !== 0) {
        arrayOfStyles[rule[0]] = rule[1];
      }
    });

  return arrayOfStyles;
}

module.exports = convertToObject;
