'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styles = sourceString
    .trim()
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'));

  styles.forEach((el) => {
    const [key, value] = el.split(':');

    if (key && value !== undefined) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
