'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesTab = sourceString.split(';').filter(el => el.trim() !== '');
  const resultObj = {};

  stylesTab.forEach(style => {
    const [property, value] = style.split(':').map(el => el.trim());

    resultObj[property] = value;
  });

  return resultObj;
}

module.exports = convertToObject;
