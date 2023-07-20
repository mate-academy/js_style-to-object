'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const PROP_END_LINE = ';\n';
  const PROP_ASSIGNMENT = ':';
  const PROP_EMPTY = '';

  const styles = {};
  const properties = sourceString.split(PROP_END_LINE);

  properties.forEach((property) => {
    const [name, value] = property
      .split(PROP_ASSIGNMENT)
      .map((part) => part.trim());

    if (name !== PROP_EMPTY) {
      styles[name] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
