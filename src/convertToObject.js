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

  return styles.reduce((acc, style) => {
    const [rawKey, rawValue] = style.split(':');

    acc[rawKey.trim()] = rawValue.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
