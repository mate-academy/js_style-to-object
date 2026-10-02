'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';').map((el) => el.trim());
  const rulesWithoutEmpty = rules
    .filter((el) => el !== '')
    .map((el) => {
      const indexOfColon = el.indexOf(':');
      const property = el.slice(0, indexOfColon).trim();
      const value = el.slice(indexOfColon + 1).trim();

      return { [property]: value };
    })
    .reduce((acc, el) => {
      return { ...acc, ...el };
    }, {});

  return rulesWithoutEmpty;
}

module.exports = convertToObject;
