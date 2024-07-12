'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((block) => block.trim())
    .filter((block) => block.includes(':'))
    .reduce((cssProperties, block) => {
      const [key, value] = block
        .split(':')
        .map((splitBlock) => splitBlock.trim());

      cssProperties[key] = value;

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
