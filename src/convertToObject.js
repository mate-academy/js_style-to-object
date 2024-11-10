'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const res = {};

  const styles = sourceString.split(';').filter((line) => line.trim() !== '');

  styles.forEach((style) => {
    const [key, ...values] = style.trim().split(/\s*:\s*/);
    const value = values.join(' ').trim();
    const normalKey = key.trim().replace(/\s+/g, '-');

    res[normalKey] = value;
  });

  return res;
}

module.exports = convertToObject;
