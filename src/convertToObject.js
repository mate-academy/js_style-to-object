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
  const convertedStyles = sourceString
    .split(/[\n;]/)
    .filter(el => el.trim() !== '')
    .reduce((stylesObject, styleProperty) => {
      const trimedProperty = styleProperty
        .split(':')
        .map(element => element.trim());

      return {
        ...stylesObject,
        [trimedProperty[0]]: trimedProperty[1],
      };
    }, {});

  return convertedStyles;
}

module.exports = convertToObject;
