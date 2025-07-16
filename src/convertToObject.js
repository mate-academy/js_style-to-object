'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'));

  for (const rule of rules) {
    const [key, ...value] = rule.split(':');

    styles[key.trim()] = value.join(':').trim();
  }

  return styles;
}
module.exports = convertToObject;
