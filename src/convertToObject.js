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
function convertToObject(styles) {
  const splitedStyles = styles.split(';');

  const splitedStylesWithoutEmpty = splitedStyles.map(
    element => element.split(':')
      .map(value => value.trim()))
    .filter(filterElement => filterElement[0] !== '');

  const sortedStyles = {};

  splitedStylesWithoutEmpty.map(
    element => (sortedStyles[element[0]] = element[1]));

  return sortedStyles;
}

module.exports = convertToObject;
