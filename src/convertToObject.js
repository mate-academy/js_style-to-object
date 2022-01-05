'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splitInput = sourceString.split(';');
  const arrStyles = splitInput.filter(elem => elem.trim() !== '');
  const trimStyles = arrStyles.map(elem => elem.replace(/\s+/g, ' ').trim());
  const arrOfArrStyles = trimStyles.map(elem => elem.split(':'));

  const stylesObj = arrOfArrStyles.reduce((prev, style) => {
    const key = style[0].trim();
    const value = style[1].trim();

    return {
      ...prev,
      [key]: value,
    };
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
