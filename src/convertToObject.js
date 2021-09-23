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
  const resultedObject = {};

  const unformatedStyles = sourceString.split(';');

  const sepparatedStyles = unformatedStyles.map(
    property => property.split(':')
  );

  const trimmedStyles = sepparatedStyles.map(
    style => style.map(part => part.trim())
  );

  const filteredStyles = trimmedStyles.filter(
    style => style.length !== 1
  )

  filteredStyles.forEach(style => {
    resultedObject[style[0]] = style[1];
  });

  return resultedObject;
}

module.exports = convertToObject;
