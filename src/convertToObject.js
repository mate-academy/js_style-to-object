'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const cssProperties = {};

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

  // for (const block of styleDeclarations) {
  // const splitBlock = block.split(':');

  // block.map((cssProperties) => (cssProperties.block[0] = block[1]));
  // if (splitBlock[1] === undefined) {
  // continue;
  // }
  // cssProperties[block[0].trim()] = block[1].trim();
}

module.exports = convertToObject;
