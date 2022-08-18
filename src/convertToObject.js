'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties
 * are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';\n');

  const cssArray = sourceArray
    .map((styleType) => {
      const styleName = styleType.split(': ')[0].trim();
      const styleValue = styleType.split(': ')[1];
      const cssObj = {
        [styleName]: String(styleValue).trim(),
      };

      return cssObj;
    })
    .filter((styleType) =>
      (
        styleType[''] !== 'undefined'
      ));

  const arrayCssToObjectCss = Object.assign({}, ...cssArray);

  return arrayCssToObjectCss;
}

module.exports = convertToObject;
