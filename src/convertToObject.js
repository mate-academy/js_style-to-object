'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const array = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2)
    .map(style => style.map(styleProperty => styleProperty.trim()));

  const styles = {};

  array.forEach(([ name, value ]) => {
    styles[name] = value;
  });

  return styles;
};

module.exports = convertToObject;
