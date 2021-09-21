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
  const style = {};

  sourceString
    .split(';')
    .map(property => property.split(':').map(properties => properties.trim()))
    .filter(property => property[0] !== '')
    .forEach(styles => {
      style[styles[0]] = styles[1];
    });

  return style;
}

module.exports = convertToObject;
