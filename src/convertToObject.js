'use strict';

const DECLARATION_SEPARATOR = ';';
const PROP_VALUE_SEPARATOR = ':';
const EMPTY_STRING = '';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(DECLARATION_SEPARATOR)
    .reduce((styleObj, styleEntry) => {
      const declaration = styleEntry.trim();

      if (declaration === EMPTY_STRING) {
        return styleObj;
      }

      const [property, value] = declaration.split(PROP_VALUE_SEPARATOR);

      styleObj[property.trim()] = value.trim();

      return styleObj;
    }, {});
}

module.exports = convertToObject;
