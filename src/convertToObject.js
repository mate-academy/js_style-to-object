'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (sourceString.length === 0) {
    return {};
  }

  const cssToObject = {};

  if (sourceString.includes(';')) {
    const sourceArray = sourceString.split(';');

    sourceArray.forEach((element) => {
      if (element.length > 3) {
        const eachStyleArray = element.split(':');

        eachStyleArray.forEach((elementEachStyle, index, array) => {
          array[index] = clearWord(elementEachStyle);
        });

        if (eachStyleArray[0] && eachStyleArray[1]) {
          cssToObject[eachStyleArray[0]] = eachStyleArray[1];
        }
      }
    });
  } else {
    const eachStyleArray = sourceString.split(':');

    eachStyleArray.forEach((elementEachStyle, index, array) => {
      array[index] = clearWord(elementEachStyle);
    });

    if (eachStyleArray[0] && eachStyleArray[1]) {
      cssToObject[eachStyleArray[0]] = eachStyleArray[1];
    }
  }

  function clearWord(word) {
    let cleanWord = word.trim();

    cleanWord = cleanWord.replaceAll('\t', '');

    if (!word.includes(',')) {
      cleanWord = cleanWord.replaceAll('\n', '');
    }

    cleanWord = cleanWord.trim();

    return cleanWord;
  }

  return cssToObject;
}

module.exports = convertToObject;
