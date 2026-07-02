'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesProperties = sourceString.split(';');

  const stylePairs = stylesProperties.map((style) => style.split(':'));
  const normalizedStylePairs = stylePairs.map((entry, index) => {
    let [key, value] = entry;

    key = key.replace(/\s+/g, ' ').trim();

    if (key) {
      const wordChars = [...value.matchAll(/\S/g)];

      value = value.slice(wordChars[0].index, wordChars.at(-1).index + 1);
    }

    return [key, value];
  });

  return Object.fromEntries(normalizedStylePairs.filter(([key, value]) => key));
}

module.exports = convertToObject;
