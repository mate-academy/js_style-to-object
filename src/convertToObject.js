'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const couples = sourceString.split(';');

  const splitted = couples.map((couple) =>
    couple.split(':').map((el) => el.trim()),
  );

  return splitted.reduce((acc, curr) => {
    if (curr[0] && curr[1] !== undefined) {
      acc[curr[0]] = curr[1];
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
