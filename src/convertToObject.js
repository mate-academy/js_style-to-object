'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  const rules = sourceString.split(';').filter((rule) => rule.trim() !== '');

  const stylesObject = rules.reduce((acc, rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      return { ...acc, [property]: value };
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
