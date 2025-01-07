'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

// const complexStylesString = `
//   background-color: #fff;
//   border: 1px solid #e8e8e8;
// `;

function convertToObject(sourceString) {
  const result = {};

  const strings = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.includes(':'));

  strings.forEach((str) => {
    const [key, value] = str.split(':').map((part) => part.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
