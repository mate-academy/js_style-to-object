'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.trim().split(';');

  const style = styleDeclarations
    .filter((elm) => {
      if (elm.indexOf(':') !== -1) {
        return elm;
      }
    })
    .map((elm) => {
      return elm.split(':');
    })
    .reduce((object, elm) => {
      return { ...object, [elm[0].trim()]: elm[1].trim() };
    }, {});

  return style;
}

module.exports = convertToObject;
