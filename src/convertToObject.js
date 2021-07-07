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
  const cssRules = {};
  const array = sourceString.match(/.+\w+\b/g);

  array.forEach(rules => {
    const key = rules.split(':')[0].trim();

    cssRules[key] = rules.split(':')[1].trim();
  });

  return cssRules;
}

module.exports = convertToObject;
