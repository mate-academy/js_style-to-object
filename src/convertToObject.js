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
  const styleMap = sourceString
    .split('\n')
    .map(el => el.trim())
    .filter(el =>
      el !== '' && el !== ';').map(el => (
      el.split(':').map(item => item.trim())
    ));

  const styleList = {};

  for (const [ key, value ] of styleMap) {
    styleList[key] = value.substr(0, value.length - 1).trim();
  }

  return styleList;
}

module.exports = convertToObject;
