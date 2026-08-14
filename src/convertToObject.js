'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const cssProperties = styles.reduce((acc, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
