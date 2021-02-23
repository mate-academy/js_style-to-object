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
  const splittedProperties = sourceString.split(';');

  const propertiesTrimmed = splittedProperties.map(property => property.trim());

  const propertieswithoutEmptyLine = propertiesTrimmed
    .filter(Boolean);

  const properties = propertieswithoutEmptyLine
    .map(property => property.split(':'));

  const mergeProperties = (previousProperties, property) => {
    return {
      ...previousProperties,
      [property[0].trim()]: property[1].trim(),
    };
  };

  const styles = properties.reduce(mergeProperties, {});

  return styles;
}

module.exports = convertToObject;
