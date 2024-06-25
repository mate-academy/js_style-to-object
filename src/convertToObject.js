'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .trim()
    .split(';')
    .map((el) =>
      el
        .trim()
        .split(':')
        .map((item) => item.trim()));

  const styleObject = styleDeclarations.reduce((acc, el) => {
    if (el.length === 2) {
      acc[el[0]] = el[1];
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
