'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');

  const cleanParts = parts.map((part) => part.trim().split(':'));

  const result = cleanParts.reduce((acc, part) => {
    if (part.length === 0 || part[0].trim() === '') {
      return acc;
    }

    if (part.length === 1) {
      return acc;
    }

    const piece1 = part[0].trim();
    const piece2 = part[1].trim();

    acc[piece1] = piece2;

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
