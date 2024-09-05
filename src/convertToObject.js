'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter((style) => style.length > 1 && style.includes(':'));

  return styles.reduce((prev, style) => {
    const [key, value] = style.split(':');

    prev[key.trim()] = value.trim();

    return prev;
  }, {});
}

module.exports = convertToObject;
