'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').map(el => el.split(':'));

  return arr.reduce((prev, el) => {
    if (el.length > 1) {
      return {
        ...prev,
        [el[0].trim()]: el[1].trim(),
      };
    }

    return { ...prev };
  }, {});
}

module.exports = convertToObject;
