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
  const styleArray = sourceString.split(';')
    .filter(style => style.trim());

  return styleArray.reduce((styleList, styleStr) => {
    const [nameStyle, style] = styleStr.split(':');

    return {
      ...styleList,
      [nameStyle.trim()]: style.trim(),
    };
  }, {});
}

module.exports = convertToObject;
