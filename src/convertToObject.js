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
  const stylesObject = {};

  const lines = sourceString.trim().split(';');

  lines.forEach(line => {
    if (line.trim() === '') {
      return;
    }

    const [property, ...valueParts] = line.split(':');

    if (property && valueParts.length > 0) {
      const propertyName = property.trim();
      const propertyValue = valueParts.join(':').trim().replace(/;$/, '');

      stylesObject[propertyName] = propertyValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
