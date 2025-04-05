'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.includes(':'));

  const styleObject = styleEntries.reduce((acc, entry) => {
    const colonIndex = entry.indexOf(':');

    const key = entry
      .slice(0, colonIndex)
      .replaceAll(' ', '')
      .replaceAll('\n', '')
      .replaceAll('\t', '');

    const rawValue = entry.slice(colonIndex + 1);
    const value = cleanStyleValue(rawValue);

    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return styleObject;
}

function cleanStyleValue(valueString) {
  const characters = valueString.split('');
  const hasComma = characters.includes(',');

  if (hasComma) {
    const firstNonSpaceIndex = characters.findIndex(
      (char) => char !== ' ' && char !== '\n' && char !== '\t',
    );

    return characters.slice(firstNonSpaceIndex).join('');
  }

  const cleaned = characters
    .join('')
    .replaceAll('\n', '')
    .replaceAll('"', '')
    .replaceAll('\t', '');

  const first = [...cleaned].findIndex((char) => char !== ' ');
  const last = [...cleaned].findLastIndex((char) => char !== ' ');

  return cleaned.slice(first, last + 1);
}

module.exports = convertToObject;
