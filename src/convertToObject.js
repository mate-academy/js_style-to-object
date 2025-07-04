'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const converted = {};
  const cuttedString = sourceString.split(';');

  const filtered = cuttedString.filter((line) => {
    const trimmed = line.trim();

    return trimmed !== '' && trimmed.includes(':');
  });

  filtered.map((item) => {
    let [property, value] = item.split(':');

    property = property.trim();
    value = value.trim();

    return (converted[property] = value);
  });

  return converted;
}

module.exports = convertToObject;
