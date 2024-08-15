'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = function (sourceString) {
  const styleObject = {};

  const cleanSourceString = sourceString
    .replace(/[\t\r]+/g, '')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/;\n/g, ';');

  const declarationsArray = cleanSourceString.trim().split(';').filter(Boolean);

  let buffer = '';
  let insideMultilineValue = false;

  declarationsArray.forEach(function (declarationItem) {
    if (insideMultilineValue) {
      buffer += declarationItem.trim();

      if (!/\\$/.test(buffer)) {
        const parts = buffer.split(':');

        if (parts.length === 2) {
          styleObject[parts[0].trim()] = parts[1].trim();
        }
        insideMultilineValue = false;
        buffer = '';
      }
    } else {
      const parts = declarationItem.split(':');

      if (parts.length === 2) {
        if (/\\$/.test(parts[1].trim())) {
          buffer = declarationItem.trim();
          insideMultilineValue = true;
        } else {
          styleObject[parts[0].trim()] = parts[1].trim();
        }
      }
    }
  });

  return styleObject;
};

module.exports = convertToObject;
