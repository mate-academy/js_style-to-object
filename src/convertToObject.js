'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedStylesParts
  = sourceString
    .split(';')
    .map(style =>
      style
        .split(':')
        .map(stylePart => stylePart.trim())
    )
    .filter(style =>
      style.length === 2);

  const styles = formatedStylesParts.reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value,
  }), {});

  return styles;
}

module.exports = convertToObject;
