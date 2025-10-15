'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  const normalized = sourceString.replace(/\t/g, ' ').replace(/\n/g, ' ');

  const rules = normalized
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  const stylesMap = rules.reduce((acc, rule) => {
    const [property, ...valueParts] = rule.split(':');
    const prop = (property || '').trim();

    if (!prop || valueParts.length === 0) {
      return acc;
    }

    const value = valueParts.join(':').trim();

    acc[prop] = value;

    return acc;
  }, {});

  return stylesMap;
}

module.exports = convertToObject;
