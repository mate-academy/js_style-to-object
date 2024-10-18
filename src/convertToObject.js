'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStyle = sourceString.split(';');
  const style = {};

  sourceStyle.forEach((source) => {
    const data = source.split(':');

    if (data[0].trim()) {
      const key = data[0].trim();
      const value = data[1];

      if (value.includes(',')) {
        style[key] =
          typeof value === 'string'
            ? value.replace(/[\t\n]/g, '\n').trim()
            : null;
      } else {
        style[key] =
          typeof value === 'string'
            ? value.replace(/[\t\n]/g, '').trim()
            : null;
      }
    }
  });

  return style;
}

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }

module.exports = convertToObject;
