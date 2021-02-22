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
  const properties = sourceString.split(';').map(elem => elem.trim());
  const deleteEmptyPropetries = properties.filter(elem => elem !== '');
  const propertiesWithoutSpaces = deleteEmptyPropetries
    .map(elem => elem.split(':')
      .map(item => item.trim()));

  const styles = propertiesWithoutSpaces.reduce((accumulator, value) => {
    accumulator[value[0]] = value[1];

    return accumulator;
  }, {});

  return styles;
}

module.exports = convertToObject;
