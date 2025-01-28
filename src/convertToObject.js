'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  let temporaryWordsArray = [];
  let temporaryValuesString = '';
  const stylesObject = {};
  const splitedSource = sourceString.split(';');
  const allowedSymbols = /[^\s:;\n\t ]+/gm;

  for (const style of splitedSource) {
    if (allowedSymbols.test(style) === false) {
      continue;
    }

    temporaryWordsArray = style.match(allowedSymbols);
    temporaryValuesString = temporaryWordsArray[1];

    for (let i = 2; i < temporaryWordsArray.length; i++) {
      temporaryValuesString += ' ' + temporaryWordsArray[i];
    }

    stylesObject[temporaryWordsArray[0]] = temporaryValuesString;

    temporaryWordsArray = [];
    temporaryValuesString = '';
  }

  return stylesObject;
}

module.exports = convertToObject;
