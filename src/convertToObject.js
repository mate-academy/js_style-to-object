'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .forEach(element => {
      const possession = element.split(':');

      if (possession.length !== 1) {
        styles[possession[0].trim()] = possession[1].trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
