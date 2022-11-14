'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 *  of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertys = sourceString.split(';');
  const result = propertys.reduce((prev, item) => {
    const property = item.split(':');

    if (property.length < 2) {
      return { ...prev };
    } else {
      const key = property[0].trim();
      const value = property[1].trim();

      return {
        [key]: value,
        ...prev,
      };
    }
  }, {});

  return result;
}

module.exports = convertToObject;
