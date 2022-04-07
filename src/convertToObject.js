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
  const properties = sourceString.split(';\n');
  const styledObject = {};

  for (let i = 0; i < properties.length; i++) {
    const splittedProperties = properties[i].split(':');

    const clearLine = splittedProperties.map(item => {
      return item.trim();
    });

    if (clearLine.length === 2) {
      styledObject[clearLine[0]] = clearLine[1];
    }
  }

  return styledObject;
}

module.exports = convertToObject;
