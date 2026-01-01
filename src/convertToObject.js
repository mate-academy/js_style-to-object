'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString.split(';');
  const rules = styleObject.filter((rule) => rule.trim() !== '');
  const formatStyle = rules.reduce((style, rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return style;
    }

    const key = rule.slice(0, colonIndex).trim();
    const valuePart = rule.slice(colonIndex + 1).trim();

    style[key] = valuePart;

    return style;
  }, {});

  return formatStyle;
}

module.exports = convertToObject;
