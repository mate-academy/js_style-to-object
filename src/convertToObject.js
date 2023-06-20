'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObjectOfRules = {};
  const arrOfRules = sourceString.split(';');
  const arrOfFormatedRules = arrOfRules
    .map(rule => rule
      .split(':')
      .map(item => item.replace('\n', '').trim()))
    .filter(el => el.length > 1);

  arrOfFormatedRules.forEach(rule => (
    resultObjectOfRules[rule[0]] = rule[1]
  ));

  return resultObjectOfRules;
};

module.exports = convertToObject;
