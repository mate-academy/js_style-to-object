'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  const formattedStr = sourceString.replace(/;{2,}/g, ';').replace(/;$/, '');
  const styleArr = formattedStr.split(';');

  styleArr.forEach(item => {
    const splittedItem = item.split(':');

    if (splittedItem[0] && splittedItem[1]) {
      styleObj[splittedItem[0].trim()] = splittedItem[1].trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
