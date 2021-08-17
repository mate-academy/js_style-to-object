'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfProperties = sourceString.split(';')
    .map(item => item.split(':')
      .map(property => property.trim()))
    .filter(elem => elem.length === 2);

  const properties = {};

  arrayOfProperties.forEach((prop) => {
    properties[prop[0]] = prop[1];
  });

  return properties;
}

module.exports = convertToObject;
