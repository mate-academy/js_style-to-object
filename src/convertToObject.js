'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(/;\s*/)
    .filter(Boolean)
    .forEach((rule) => {
      const match = rule.match(/([^:]+):([\s\S]+)/);

      if (match) {
        const property = match[1].trim();
        const value = match[2].trim();

        styles[property] = value;
      }
    });

  return styles;
}

module.exports = convertToObject;
