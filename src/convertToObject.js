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
  const styles = {};

  const arr = sourceString
    .split(';').map(phrase => phrase
      .split(':').map(word => word
        .trim()).join(':'))
    .filter(phrase => phrase);

  for (const phrase of arr) {
    styles[phrase.split(':')[0]] = phrase.split(':')[1];
  }

  return styles;
}

module.exports = convertToObject;
