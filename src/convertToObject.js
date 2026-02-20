'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((el) => {
      return el.split(':').map((elPart) => elPart.trim());
    })
    .filter((el) => el.length > 1)
    .reduce((resulted, el) => {
      return {
        ...resulted,
        [el[0]]: el[1],
      };
    }, {});

  return result;
}

module.exports = convertToObject;
