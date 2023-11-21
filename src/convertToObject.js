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
  const styleArr = sourceString.split(';');
  const result = styleArr
    .map(style => {
      const [property, value] = style.split(':')
        .map(part => part.trim());

      return [property, value];
    })
    .filter(([property, value]) => property && value)
    .reduce((obj, [property, value]) => {
      obj[property] = value;

      return obj;
    }, {});

  return result;
}

module.exports = convertToObject;
