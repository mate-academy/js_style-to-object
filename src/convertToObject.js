'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const noEmptyLines = sourceString
    .split(';')
    .map((line) => {
      return line.trim();
    })
    .filter((item) => item.length > 0);

  // trim
  const noSpaces = noEmptyLines.map((item) => {
    const [property, value] = item.split(':');

    const newKey = property.trim();
    const newValue = value.trim();

    return `${newKey}:${newValue}`;
  });

  const convertToObj = noSpaces.reduce((prev, item) => {
    const [key, value] = item.split(':');

    return { ...prev, [key]: value };
  }, {});

  return convertToObj;
}

module.exports = convertToObject;
