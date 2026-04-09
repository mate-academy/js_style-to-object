'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  const validLines = lines.filter((line) => line.includes(':'));

  const stylesObject = {};

  validLines.forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim().replace(';', '').trim();

    stylesObject[key.trim().replace(/\n/g, '')] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
