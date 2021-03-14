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
  const styles = {};
  const propertiesList = sourceString.split(';')
    .map(property => property.split(': ').map(item => item.trim()))
    .filter(property => property.length === 2);

  propertiesList.forEach(property => {
    styles[property[0]] = property[1];
  });

  return styles;
}

module.exports = convertToObject;
