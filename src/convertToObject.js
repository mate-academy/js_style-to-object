'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssLines = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const cssClass = {};

  cssLines.forEach((pair) => {
    const [name, ...values] = pair.split(':');

    cssClass[name.trim()] = values.join(':').trim();
  });

  return cssClass;
}

module.exports = convertToObject;
