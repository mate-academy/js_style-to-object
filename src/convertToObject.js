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
  const propertiesAll = sourceString.split(';');
  const propertiesTrimmed = propertiesAll.map(property => property.trim());
  const propertieswithoutEmptyLine = propertiesTrimmed
    .filter(property => property);
  const properties = propertieswithoutEmptyLine
    .map(property => property.split(':'));

  const propertiesUnion = (previousProperties, property) => {
    return {
      ...previousProperties,
      [property[0].trim()]: property[1].trim(),
    };
  };

  const styles = properties.reduce(propertiesUnion, {});

  return styles;
}

module.exports = convertToObject;
