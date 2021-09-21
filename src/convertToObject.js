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
  const stylesList = sourceString
    .split(';')
    .map(property => property.split(':').map(properties => properties.trim()))
    .filter(property => property[0] !== '');

  for (let i = 0; i < stylesList.length; i++) {
    style[stylesList[i][0]] = stylesList[i][1];
  };

  return style;
}

module.exports = convertToObject;
