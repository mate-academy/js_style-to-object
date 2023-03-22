'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRules = {};
  const filteredCSSRules = sourceString
    .split(';')
    .filter(cssRule => cssRule.trim() !== '');

  filteredCSSRules.forEach(cssRule => {
    const [property, value] = cssRule
      .split(':')
      .map(partOfRule => partOfRule.trim());

    cssRules[property] = value;
  });

  return cssRules;
}

module.exports = convertToObject;
