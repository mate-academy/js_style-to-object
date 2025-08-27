'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  // divide por ; e remove espaços extras e linhas vazias
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  rules.forEach((rule) => {
    const idx = rule.indexOf(':');

    if (idx > -1) {
      const property = rule.slice(0, idx).trim();
      const value = rule.slice(idx + 1).trim();

      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
