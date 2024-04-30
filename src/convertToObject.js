'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const breakingTheRuleIntoFragments = (rule) => {
  const ruleTrim = rule.trim();
  const colon = ruleTrim.indexOf(':');
  const property = ruleTrim.slice(0, colon).trim();
  const value = ruleTrim.slice(colon + 1).trim();

  return [property, value];
};

const convertToObject = (sourceString) =>
  Object.fromEntries(
    sourceString
      .trim()
      .split(';')
      .filter((rule) => {
        const [property, value] = breakingTheRuleIntoFragments(rule);

        if (property && value) {
          return true;
        } else {
          return false;
        }
      })
      .map((rule) => breakingTheRuleIntoFragments(rule)),
  );

module.exports = convertToObject;
