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
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .forEach((rule) => {
      const [property, ...valueParts] = rule.split(/:\s*/);

      if (property && valueParts.length) {
        styles[property.trim()] = valueParts.join(':').trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
