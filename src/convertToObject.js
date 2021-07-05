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
  // write your code here
  const cssProperties = sourceString.split(';');

  const filteredCssProperies = cssProperties
    .filter((item) => Boolean(item.trim()))
    .map((item) => item.trim());

  const styles = filteredCssProperies.reduce(
    (previouslyState, property) => {
      const key = property.split(':')[0].trim();
      const value = property.split(':')[1].trim();

      return {
        ...previouslyState,
        [key]: value,
      };
    }, {});

  return cssPropertiesObject;
}

module.exports = convertToObject;
