'use strict';

/**
 * Implement convertToObject function:
 *
 *Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styledObject = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .reduce((obj, nextElement) => {
      const [key, value] = nextElement.split(':');
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      return {
        ...obj, [trimmedKey]: trimmedValue,
      };
    }, {});

  return styledObject;
}

module.exports = convertToObject;
