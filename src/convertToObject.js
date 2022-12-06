'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';')
    .forEach(rule => {
      if (rule.includes(':')) {
        const parts = rule.split(':');

        styles[parts[0].trim()] = parts[1].trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
