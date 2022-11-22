'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties(see an examplin[
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const stylesToArr = sourceString
    .split(';')
    .map(rules => rules.trim())
    .filter(rules => rules.length > 0);

  stylesToArr.forEach((rules) => {
    const styleToArr = rules.split(':');

    const [key, value] = styleToArr;

    styleObj[key.trim()] = value.trim();
  });

  return styleObj;
}

module.exports = convertToObject;
