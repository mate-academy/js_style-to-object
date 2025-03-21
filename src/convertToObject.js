'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(keys) {
  const styleArry = keys.split(';');

  const resultArr = styleArry
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  const stylesEntries = resultArr.map((style) => {
    const [key, value] = style.split(':');

    return [key.trim(), value.trim()];
  });

  const total = stylesEntries.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return total;
}

module.exports = convertToObject;
