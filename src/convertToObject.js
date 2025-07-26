'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separetedValues = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  const kAndV = separetedValues.reduce((prev, item) => {
    const temporary = item.split(':');

    if (temporary.length === 2) {
      const key = temporary[0].trim();
      const value = temporary[1].trim();

      return { ...prev, [key]: value };
    }
  }, {});

  return kAndV;
}

// console.log(convertToObject(`;; ;display: flex; ; ; margin: 1rem; ; ; `));

module.exports = convertToObject;
