'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesClear = removeSpaces(styles);
  const stylesGroup = stylesClear.map(style => style.split(':'));
  const stylesGroupClear = stylesGroup.map(style => removeSpaces(style));
  const propertiesOfCSS = stylesGroupClear.reduce(
    (acc, style) => {
      if (style.length > 1) {
        acc[style[0]] = style[1];
      }

      return acc;
    },
    {},
  );

  return propertiesOfCSS;
}

function removeSpaces(strings) {
  return strings.map(str => str.trim());
}

module.exports = convertToObject;
