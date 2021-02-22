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
  const styleElements = sourceString.split(';');
  const styleElementsCell = styleElements.map(element => element.split(':'));
  const property = styleElementsCell.map(
    element => element.map(pair => pair.trim())
  );
  const styleElementsWithoutEmpty = property.filter(
    element => element.length === 2
  );
  const styles = {};

  for (const element of styleElementsWithoutEmpty) {
    styles[element[0]] = element[1];
  }

  return styles;
}

module.exports = convertToObject;
