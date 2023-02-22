'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 // eslint-disable-next-line max-len
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const regex = /, |:|\n/g;
  const normalizedString = sourceString.replace(regex, '');

  const complexProperties = normalizedString.split(';');

  const properties = complexProperties.map(
    element => element.split(' ').filter(item => item !== '')
  ).filter(element => element.length !== 0);

  const computedProperties = {};

  properties.forEach(element => {
    computedProperties[element[0]] = element.splice(1).join(' ');
  });

  return computedProperties;
}

module.exports = convertToObject;
