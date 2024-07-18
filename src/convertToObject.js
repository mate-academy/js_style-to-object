'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length < 1) {
    return {};
  }

  const sourceElements = sourceString.split(';');

  const sourceObject = sourceElements
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .reduce((obj, el) => {
      const key = el.slice(0, el.indexOf(':')).trim();
      const value = `${el.slice(el.indexOf(':') + 1, el.length).trim()}`;

      return {
        ...obj,
        [key]: value,
      };
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
