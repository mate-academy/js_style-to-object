'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const rules = sourceString
    .split(';')
    .map((r) => r.trim())
    .filter((r) => r !== '');

  rules.forEach((rule) => {
    const [prop, value] = rule.split(':');

    obj[prop.trim()] = value.trim();
  });

  return obj;
}

module.exports = convertToObject;
