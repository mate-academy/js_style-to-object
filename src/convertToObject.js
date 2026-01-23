'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString.trim();
  const arrayStyles = styles.split(';').filter((style) => style.trim() !== '');

  return arrayStyles.reduce((acc, styleString) => {
    const parts = styleString.split(':');
    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
