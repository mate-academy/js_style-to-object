'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanString = sourceString.trim();
  const rules = cleanString.split(';');

  const styles = rules.reduce((acc, rule) => {
    const [rawKey, rawValue] = rule.split(':');

    if (rawKey && rawValue) {
      const key = rawKey.trim();
      const value = rawValue.trim();

      acc[key] = value;
    }

    return acc;
  }, {});

  return styles;
}

module.exports = convertToObject;

/**
 * tenho que transformar a propriedade do CSS em 'key' e seu valor em 'value'
 * para isso tenho que separar a string antes dos dois pontos como 'key'
 * e depois dos dois pontos como 'value'
 *
 */
