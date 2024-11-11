'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const styles = sourceString.split(';').filter((style) => style.length !== 0);

  styles.forEach((style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      resultObject[key.trim()] = value.trim();
    }
  });

  return resultObject;
}

module.exports = convertToObject;
