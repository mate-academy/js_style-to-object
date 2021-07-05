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
  const sourceArray = sourceString.split(';');
  const styleObject = {};

  function removeEmptyRules(element) {
    return element.includes(':');
  }

  const cssRules = sourceArray.filter(removeEmptyRules);

  for (const rule of cssRules) {
    const key = rule.split(':')[0].trim();
    const value = rule.split(':')[1].trim();

    styleObject[key] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
