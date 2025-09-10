'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleValues = {};
  const declarations = sourceString
    .split(';')
    .map((value) => value.trim())
    .filter((value) => value.length > 0);

  declarations.forEach((decl) => {
    const i = decl.indexOf(':');

    if (i === -1) {
      return;
    }

    const property = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();

    if (property && value) {
      styleValues[property] = value;
    }
  });

  return styleValues;
}

module.exports = convertToObject;
