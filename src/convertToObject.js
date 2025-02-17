'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const CSS_RULES = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  const FILTERED_CSS_RULES = {};

  CSS_RULES.forEach((rule) => {
    const colonIndex = rule.indexOf(':');
    const colonIndexExists = colonIndex !== -1;

    if (colonIndexExists) {
      const cssProperty = rule.slice(0, colonIndex).trim();
      const cssValue = rule.slice(colonIndex + 1).trim();
      const isCorrectCssValue = cssProperty && cssValue;

      if (isCorrectCssValue) {
        FILTERED_CSS_RULES[cssProperty] = cssValue;
      }
    }
  });

  return FILTERED_CSS_RULES;
}

module.exports = convertToObject;
