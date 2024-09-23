'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const rawLines = sourceString.split(';');

  // filter lines without letters
  const noEmptyLines = rawLines
    .map((line) => {
      return line.trim();
    })
    .filter((item) => item.length > 0);

  const aggregatedLines = noEmptyLines.reduce((prev, line) => {
    if (line.includes(':')) {
      prev.push(line);
    } else {
      prev[prev.length - 1] += line;
    }

    return prev;
  }, []);

  // remove ';'
  const noSemicolon = aggregatedLines.map((item) => {
    // Array[string]
    const [property, value] = item.split(':');
    const newValue = value.split(';').join('');

    return `${property}:${newValue}`;
  });

  // trim
  const noSpaces = noSemicolon.map((item) => {
    const [property, value] = item.split(':');

    const newKey = property.trim();
    const newValue = value.trim();

    return `${newKey}:${newValue}`;
  });

  const convertToObj = noSpaces.reduce((prev, item) => {
    const [key, value] = item.split(':');

    return { ...prev, [key]: value };
  }, {});

  return convertToObj;
}

module.exports = convertToObject;
