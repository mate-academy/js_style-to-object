'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const styles = {};
  const separateStyle = sourceString.split(';');

  separateStyle.forEach(style => {
    const formattedStyles = style.trim();
    const key = formattedStyles
      .slice(0, formattedStyles
        .indexOf(':')).trim();
    const value = formattedStyles
      .slice(formattedStyles
        .indexOf(':') + 1)
      .trim();

    if (key.length !== 0 && value.length !== 0) {
      styles[[`${key}`]] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
