'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const propertiesList = sourceString.split(';');

  propertiesList.forEach(prop => {
    const [propName, value] = prop.split(':');

    if (propName.trim() !== '' || value) {
      styles[propName.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
