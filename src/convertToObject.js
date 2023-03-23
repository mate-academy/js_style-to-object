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
  const sourceArray = sourceString
    .split(';')
    .map(item =>
      item
        .split(':')
        .map(subItem => subItem.trim())
    )
    .filter(style => style.length > 1);

  const sourceObject = sourceArray
    .reduce((resultObject, property) => {
      const [key, value] = property;

      resultObject[key] = value;

      return resultObject;
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
