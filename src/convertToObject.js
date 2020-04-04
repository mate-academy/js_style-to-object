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
  const stylesObj = {};
  const styles = sourceString.substr(1,).split(/;\n+/);

  for (const style of styles) {
    if (style.trim().length === 0) {
      continue;
    };
    stylesObj[style.split(':')[0].trim()] = style.split(':')[1].trim();
  };

  return stylesObj;
}

module.exports = convertToObject;
