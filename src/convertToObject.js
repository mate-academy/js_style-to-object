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
  const stylesArray = sourceString.split(';');
  const stylesArrayFromated = [];
  const stylesArraySplited = [];
  let result = {};

  for (let i = 0; i < stylesArray.length; i++) {
    stylesArrayFromated[i] = stylesArray[i].replace(/\s+/g, ' ');
  }

  for (let j = 0; j < stylesArrayFromated.length; j++) {
    if (stylesArrayFromated[j].length > 1) {
      stylesArraySplited.push(stylesArrayFromated[j].split(':'));
    }
  }

  for (const style of stylesArraySplited) {
    const trimKey = style[0].trim();
    const trimValue = style[1].trim();

    style[0] = trimKey;
    style[1] = trimValue;
  }

  result = Object.fromEntries(stylesArraySplited);

  return result;
}

module.exports = convertToObject;
