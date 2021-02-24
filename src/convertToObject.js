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
  const stylesPair = sourceString.split(';');
  const stylesPairItem = style => style.split(':');

  const styles = stylesPair.map(stylesPairItem);

  const stylesPropertiesAndValues = {};

  for (const [ key, value ] of styles) {
    if (key && value) {
      stylesPropertiesAndValues[key.trim()] = value.trim();
    }
  }

  return stylesPropertiesAndValues;
}

module.exports = convertToObject;
