'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separateProperties = sourceString
    .split(';');

  const separateKeysValues = separateProperties
    .map(el => el.trim().split(':'));

  const convertObject = separateKeysValues.reduce((obj, currentValue) => {
    const [key, value] = currentValue.map(property => property.trim());

    if (key) {
      obj[key] = value;
    }

    return obj;
  }, {});

  return convertObject;
}

module.exports = convertToObject;
