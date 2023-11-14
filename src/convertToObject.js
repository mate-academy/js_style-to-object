'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const separateString
    = sourceString.split('\n').filter((item) => item !== '');
  const arraysOfStyles
    = separateString.map(
      item => item.split(':')).filter(item => item.length > 1
    );

  arraysOfStyles.forEach(
    (item) => {
      item.forEach(
        (word, ind) => {
          let newWalue = '';
          const wordLetters = word.split('');
          const firstLetterIndex
            = wordLetters.findIndex(
              letter => letter !== ' '
            );

          wordLetters.reverse();

          let lastLetterIndex
            = wordLetters.findIndex(
              letter => letter !== ' ' && letter !== ';'
            );

          lastLetterIndex = wordLetters.length - 1 - lastLetterIndex;

          newWalue += word.slice(firstLetterIndex, lastLetterIndex + 1);
          item[ind] = newWalue;
        }
      );
      result[item[0]] = item[1];
    }
  );

  return result;
}

module.exports = convertToObject;
