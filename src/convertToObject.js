'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
// - Someone wrote a css rules with a really bad indentation,
// |-- sooo let try to figure it out for..
// |-- ...for some reasons))
function convertToObject(sourceString) {
  const styles = {};
  const rules = sourceString
    .split(';')
    .map(a => a.trim()
      .split(':'))
    .slice(0, -1);

  for (const rule of rules) {
    if (rule[0] && rule[1]) {
      styles[rule[0].trim()] = rule[1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
