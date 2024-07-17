'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .split(';')
    .filter((item) => item.length)
    .map((element) => element.split(':').map((item) => item.trim()));

  const objectStyle = styleDeclarations.reduce((acc, value) => {
    const [key, val] = value;

    acc[key] = val;

    return acc;
  }, {});

  return objectStyle;
}

module.exports = convertToObject;
