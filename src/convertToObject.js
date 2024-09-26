'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.trim().split(';');
  stylesList.pop();

  const stylesObj = {};

  stylesList.forEach(e => {
    const property = e.match(/\S.+(?=:)/g).join('');
    const value = e.match(/(?<=:\s).*/g).join('');
    stylesObj[property] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
