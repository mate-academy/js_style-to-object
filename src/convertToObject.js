'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let resultArr = [];

  resultArr = sourceString.split(';');

  let result = {};

  resultArr = resultArr.map((lin) => lin.trimEnd().trimStart());
  //  resultArr = resultArr.map((lin) => lin.replaceAll('\t', '').trim());
  resultArr = resultArr.filter((lin) => lin !== '');
  resultArr = resultArr.map((lin) => lin.split(':'));

  result = resultArr.reduce(
    (res, lin) => ({ ...res, [lin[0].trimEnd()]: lin[1].trimStart() }),
    {},
  );

  return result;
}

module.exports = convertToObject;
