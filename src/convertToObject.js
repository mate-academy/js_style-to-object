'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split('\n')
    .filter(property => property.trim().length > 1)
    .map(property => property.split(':'));

  const formatStyles = (previous, properties) => {
    return {
      ...previous,
      [properties[0].trim()]: properties[1].slice(0, -1).trim(),
    };
  };

  const convertedStyles = styles.reduce(formatStyles, {});

  return convertedStyles;
}

module.exports = convertToObject;
