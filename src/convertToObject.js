'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    if (rule.trim() === '') {
      return;
    }

    const partsOfRules = rule.split(':');

    const key = partsOfRules[0].trim();
    const value = partsOfRules[1].trim();

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
