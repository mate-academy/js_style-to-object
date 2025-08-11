'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const values = [];
  let temp = '';

  for (const char of sourceString) {
    if (char === ';') {
      if (temp.trim() !== '') {
        values.push(temp.trim());
        temp = '';
      }
    } else {
      temp += char;
    }
  }

  if (temp.trim()) {
    values.push(temp.trim());
  }

  const keyAndVal = values.map((value) => {
    const indexPosition = value.indexOf(':');

    return [
      value.slice(0, indexPosition).trim(),
      value.slice(indexPosition + 1).trim(),
    ];
  });

  return Object.fromEntries(keyAndVal);
}

module.exports = convertToObject;
