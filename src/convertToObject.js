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
  const styles = sourceString.split(';');

  const res = styles.map((style) => style.trim().split(':'));

  res.forEach((style) => {
    if (style[0] !== '' && style[1] !== '') {
      stylesObj[style[0].trim()] = style[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
