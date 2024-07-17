'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .split(';')
    .filter((item) => item.length);

  const styleTrim = styleDeclarations.map((element) => {
    return element.split(':').map((item) => item.trim());
  });

  const styleObject = styleTrim.reduce((acc, value) => {
    const [key, val] = value;

    acc[key] = val;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
