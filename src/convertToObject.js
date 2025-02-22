'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectStyle = {};
  const styles = sourceString.split(';').filter(rule => rule.trim().length > 0);

  styles.forEach(rule => {
    const parts = rule.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    objectStyle[key] = value;
  });

  return objectStyle;
}

module.exports = convertToObject;
