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
  const styleList = sourceString.split(';')
    .filter(style =>
      style.trim() !== ''
    );

  const callback = (prev, style) => {
    const styleParts = style.split(':');
    const key = styleParts[0].trim();
    const value = styleParts[1].trim();

    return {
      ...prev,
      [key]: value,
    };
  };

  const styles = styleList.reduce(callback, {});

  return styles;
}

module.exports = convertToObject;
