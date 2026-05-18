'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedString = sourceString
    .split(';')
    .map((item) => item.trim().replace(';', ''))
    .filter((item) => item.length > 1);

  return parsedString.reduce((cssList, item) => {
    const prop = item.split(':');
    const key = prop[0].trim();
    const valueRaw = prop[1].trim();
    const value = valueRaw.includes("'")
      ? valueRaw.replaceAll("'", '')
      : valueRaw;

    cssList[key] = value;

    return cssList;
  }, {});
}

module.exports = convertToObject;
