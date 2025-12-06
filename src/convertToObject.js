'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {


  const styleLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const stylesObject = styleLines.reduce(
    (akum, ch) => {
      const [key, value] = ch.split(/\s*:\s*(.+)/s);
      return (key && value)
        ? { ...akum, [key.trim()]: value.trim() }
        : akum;
    },
    {},
  );

  return stylesObject;
}

module.exports = convertToObject;
