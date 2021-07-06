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
  const sortedStyles = sourceString.split(';')
    .map(element => element.split(':')
      .map(trimedElement => trimedElement.trim()))
    .filter(filteredElement => filteredElement[0])
    .reduce((prev, value) => {
      (prev[value[0]] = value[1]);

      return prev;
    }, {});

  return sortedStyles;
}

module.exports = convertToObject;
