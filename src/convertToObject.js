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
  let properties = sourceString.split(';');

  properties = properties.filter(property => property.trim() !== '');

  const styles = properties.reduce((output, currentProperty) => {
    const propertySplit = currentProperty.split(':');

    output[propertySplit[0].trim()] = propertySplit[1].trim();

    return output;
  }, {});

  return styles;
}

module.exports = convertToObject;
