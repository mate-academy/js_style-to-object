'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRules = {};

  sourceString.match(/.+\w+\b/g).map(rules => {
    const key = rules.split(':')[0].trim();

    cssRules[key] = rules.split(':')[1].trim();
  });

  return cssRules;
}

module.exports = convertToObject;
