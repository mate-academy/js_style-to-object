'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObj = sourceString
    .split(';')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence !== '')
    .reduce((accum, sentence) => {
      const clearSentence = sentence.split(':').map((value) => value.trim());

      accum[clearSentence[0]] = clearSentence[1];

      return accum;
    }, {});

  return convertedObj;
}

module.exports = convertToObject;
