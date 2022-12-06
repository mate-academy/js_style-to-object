'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS styles are keys
 * and values are the values of related CSS styles
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const makeAnObject = (prev, style) => {
  const separated = style.split(':');
  const [key, value] = separated;

  return separated.length > 1
    ? {
      ...prev,
      [key.trim()]: value.trim(),
    }
    : prev;
};

function convertToObject(sourceString) {
  const strings = sourceString.split(';');
  const formattedStyles = strings.reduce(makeAnObject, {});

  return formattedStyles;
}

module.exports = convertToObject;
