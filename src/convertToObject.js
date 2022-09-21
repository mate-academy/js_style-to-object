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
  let strings = sourceString.split('\n').join('').split(';');

  strings = strings.filter(string => string.includes(':'));

  const callback = (prev, string) => {
    const stringMap = string.split(':');

    return {
      ...prev,
      [stringMap[0].trim()]: stringMap[1].trim(),
    };
  };

  const properties = strings.reduce(callback, {});

  return properties;
}

module.exports = convertToObject;
