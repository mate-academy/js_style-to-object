'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString
    .split(';')
    .map((item) => item.trim().replace(';', ''))
    .filter((item) => item.length > 1);
  const resultObject = {};

  for (let i = 0; i < newString.length; i++) {
    const prop = newString[i].split(':');
    const key = prop[0].trim();
    const valueRaw = prop[1].trim();
    const value = valueRaw.includes("'")
      ? valueRaw.replaceAll("'", '')
      : valueRaw;

    resultObject[key] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
