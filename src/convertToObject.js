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
  let cssRulesObject;
  const cssRulesArr = sourceString.split(';');

  cssRulesArr.map(rule => {
    if (rule.trim()) {
      const property = rule.split(':')[0].trim();
      const value = rule.split(':')[1].trim();

      cssRulesObject = {
        ...cssRulesObject, [property]: value,
      };

      return cssRulesObject;
    }
  });

  return cssRulesObject;
}

module.exports = convertToObject;
