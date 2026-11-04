'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    // .replace(/\s+/g, '')
    .split(';')
    .map((style) => style.split(':'))
    .filter((style) => style.length > 1)
    .map(([property, value]) => {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      return { [trimmedProperty]: trimmedValue };
    })
    .reduce((prev, current) => Object.assign(prev, current), {});

  return result;
}

module.exports = convertToObject;
