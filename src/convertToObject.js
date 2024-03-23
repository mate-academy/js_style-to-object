/* eslint-disable function-paren-newline */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarativeStyles = sourceString.split(';');
  const mapedStyle = declarativeStyles.map((style) =>
    style.split(':').map((str) => str.trim()),
  );

  return mapedStyle.reduce((converted, [property, value]) => {
    return { ...converted, [property]: value };
  }, {});
}

module.exports = convertToObject;
