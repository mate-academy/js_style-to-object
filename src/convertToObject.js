'use strict';

const DECLARATION_SEPARATOR = ';';
const PROPERTY_VALUE_SEPARATOR = ':';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declaretions = sourceString
    .split(DECLARATION_SEPARATOR)
    .filter((declaration) => declaration.includes(PROPERTY_VALUE_SEPARATOR))
    .map((declaration) => {
      const separatorIndex = declaration.indexOf(PROPERTY_VALUE_SEPARATOR);
      const property = declaration.slice(0, separatorIndex).trim();
      const value = declaration.slice(separatorIndex + 1).trim();

      return [property, value];
    });

  return Object.fromEntries(declaretions);
}

module.exports = convertToObject;
