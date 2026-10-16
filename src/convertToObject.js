'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const x = sourceString;

  return x
    .split(';')
    .map((a) => a.split(':'))
    .map((c) => c.map((b) => b.trim()))
    .reduce((counter, char) => {
      if (char.length === 2) {
        return { ...counter, [char[0]]: char[1] };
      }

      return { ...counter };
    }, {});
}

module.exports = convertToObject;
