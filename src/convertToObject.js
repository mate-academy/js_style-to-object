'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedProperty = sourceString.split(';');
  const propertiesList = splitedProperty.map(property => {
    let [key, value] = property.split(':');

    key = key.replace(/\n| /g, '');
    value && (value = value.trim());

    if (key === '') {
      return;
    }

    return { [key]: value };
  });

  return Object.assign({}, ...propertiesList);
}

module.exports = convertToObject;
