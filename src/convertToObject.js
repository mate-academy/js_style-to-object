'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleUpgrated = sourceString
    .split(';')
    .map((el) => el.split(':'))
    .reduce((prev, oneStyle) => {
      if (oneStyle[0] && oneStyle[1]) {
        return { ...prev, [oneStyle[0].trim()]: oneStyle[1].trim() };
      }

      return prev;
    }, {});

  return styleUpgrated;
}

module.exports = convertToObject;
