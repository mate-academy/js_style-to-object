'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split('\n');
  const filteredLines = lines.filter((line) => line.trim() !== '');

  const parsedStylesObject = filteredLines.reduce((obj, line) => {
    const rule = line.trim();
    const colonIndex = rule.indexOf(':');
    const key = rule.slice(0, colonIndex).trim();
    let value = rule.slice(colonIndex + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }

    obj[key] = value;

    return obj;
  }, {});

  return parsedStylesObject;
}

module.exports = convertToObject;
