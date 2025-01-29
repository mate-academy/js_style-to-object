'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let resultObject = {};
  let resultArray = sourceString.split(';');

  resultArray = resultArray.map((style) => style.trimStart().trimEnd());

  resultArray = resultArray.filter((style) => style !== '');

  resultArray = resultArray.map((style) => style.split(':'));

  resultObject = resultArray.reduce(
    (prev, style) => ({ ...prev, [style[0].trimEnd()]: style[1].trimStart() }),
    {},
  );

  return resultObject;
}

module.exports = convertToObject;
