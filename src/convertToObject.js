'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const result = {};

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '' || !trimmedLine.includes(':')) {
      return;
    }

    const [property, ...valueParts] = trimmedLine.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      result[property.trim()] = value.replace(/;$/, '').trim();
    }
  });

  return result;
}
module.exports = convertToObject;
