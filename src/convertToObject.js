'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');

  const cssPropertiesObj = arr
    .filter((elem) => {
      if (elem.toUpperCase() !== elem) {
        return elem;
      }
    })
    .reduce((prev, current) => {
      const dividerIndex = current.indexOf(':');

      return {
        ...prev,
        [current.slice(0, dividerIndex).trim()]: current
          .slice(dividerIndex + 1)
          .trim(),
      };
    }, {});

  return cssPropertiesObj;
}

module.exports = convertToObject;
