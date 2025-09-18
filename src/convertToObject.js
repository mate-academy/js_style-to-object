'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const strings = sourceString.split(';');

  const filteredStrings = strings.filter(
    (str) => str.trim() !== '' && str.includes(':'),
  );

  const pairs = filteredStrings.map((str) => {
    const index = str.indexOf(':');
    const key = str.slice(0, index).trim();
    const value = str.slice(index + 1).trim();

    return [key, value];
  });

  const result = pairs.reduce((style, [key, value]) => {
    style[key] = value.replace(/;$/, '').trim();

    return style;
  }, {});

  return result;
}

module.exports = convertToObject;
