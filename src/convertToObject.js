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
  const css = {};
  const rules = sourceString.split(';\n');

  for (let rule of rules) {
    rule = rule.split(':').map(element => element.trim());

    if (rule[0] !== '' && rule[0] !== ';') {
      css[rule[0]] = rule[1];
    }
  }

  return css;
}

module.exports = convertToObject;
