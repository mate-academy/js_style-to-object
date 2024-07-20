'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssObject = {};

  const rules = sourceString
    .split(/;(?![^(]*\))/)
    .filter((rule) => rule.trim() !== '');

  rules.forEach((rule) => {
    const [property, ...valueParts] = rule.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      cssObject[property.trim()] = value.replace(/;\s*$/, '').trim();
    }
  });

  return cssObject;
}

module.exports = convertToObject;
