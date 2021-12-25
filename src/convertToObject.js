'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringsOfStyle = sourceString.split(';');
  const style = {};
  const propertiesAndValues = stringsOfStyle.map(item => item.split(':'));
  const filteredPropertiesAndValues = propertiesAndValues.filter(
    item => item[0] !== undefined && item[1] !== undefined);

  filteredPropertiesAndValues.map(
    item => {
      const key = item[0].trim();
      const value = item[1].trim();

      style[key] = value;
    });

  return style;
}

module.exports = convertToObject;
