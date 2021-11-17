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
  const stylesObject = {};
  const formatSourceString = sourceString.split(' ')
    .filter(el => el !== '\n').join(' ');
  const parseSourceString = formatSourceString.split(';');

  for (const style of parseSourceString) {
    if (style) {
      const parseStyle = style.split(':');

      for (let i = 0; i < parseStyle.length - 1; i += 2) {
        stylesObject[parseStyle[i].trim()] = parseStyle[i + 1].trim();
      }
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
