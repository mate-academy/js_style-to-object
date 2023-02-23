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
  const array = sourceString.replace(/\s+/g, ' ').split(';');

  return array.reduce((object, element, index) => {
    const key = element.slice(0, element.indexOf(':')).trim();
    const value = element.slice(element.indexOf(':') + 1,
      element.length).trim();

    return element.includes(':')
      ? {
        ...object,
        [key]: value,
      }
      : object;
  }, {});
}

module.exports = convertToObject;
