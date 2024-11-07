'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = sourceString.split(';').reduce((acc, next) => {
    const [key, value] = next.split(':');

    if ((key, value)) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return styles;
}

module.exports = convertToObject;
