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

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const values = styles.map(style => {
    const value = style.slice(style.indexOf(':') + 1, style.length).trim();

    return value;
  });
  const properties = styles.map(style => {
    const property = style.slice(style.indexOf(''), style.indexOf(':')).trim();

    return property;
  });

  const convertedStyles = Object.assign(...properties.map((n, i) =>
    ({ [n]: values[i] })));

  for (const key in convertedStyles) {
    if (convertedStyles[key] === '') {
      delete convertedStyles[key];
    }
  }

  return convertedStyles;
}

module.exports = convertToObject;
