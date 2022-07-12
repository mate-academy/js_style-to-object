'use strict';

/**
 * Implement convertToObject function:
 *

 * and returns an object where CSS properties are keys

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};
  const stylesAll = sourceString.split(';').map(style => {
    let styleCut = style;

    while (styleCut.startsWith('\n')) {
      styleCut = styleCut.slice(1);
    }

    return styleCut;
  });
  const pairOfStyles = stylesAll.map(item => item.split(':'));

  const fullfilledStyles = pairOfStyles.filter(el => el.length === 2);

  fullfilledStyles.forEach((element, index, arr) => {
    stylesObj[arr[index][0].trim()] = arr[index][1].trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
