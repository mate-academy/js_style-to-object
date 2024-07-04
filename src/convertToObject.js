'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString
    .split(';')
    .map((style) => {
      return style.trim();
    })
    .filter((style) => style !== '');

  const styles = styleArray.reduce((prev, style) => {
    const [name, value] = style.split(':');

    return { ...prev, [name.trim()]: value.trim() };
  }, {});

  return styles;
}

module.exports = convertToObject;
