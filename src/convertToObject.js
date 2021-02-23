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

  const deleteEmptyPropetries = properties.filter(Boolean);

  const propertiesWithoutSpaces = deleteEmptyPropetries.map(
    elem => elem.split(':')
  );

  const styles = propertiesWithoutSpaces.reduce((accumulator, [key, value]) => {
    accumulator[key.trim()] = value.trim();

    return accumulator;
  }, {});

  return styles;
}

module.exports = convertToObject;
