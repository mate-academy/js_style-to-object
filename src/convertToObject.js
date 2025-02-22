'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const editWords = (words) => words.trim();
  const editArray = sourceString
    .split(';')
    .filter((el) => el !== '' && el !== '  ;')
    .map((arr) => arr.split(':'))
    .map((arr) => arr.map(editWords));

  editArray.forEach(([style, value]) => {
    result[style] = value;
  });

  return result;
}

module.exports = convertToObject;
