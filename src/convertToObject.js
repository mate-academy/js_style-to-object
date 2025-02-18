'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitedStylesString = (str) => str.split(';');
  const filterBlankLines = (arr) => arr.filter((item) => item.trim() !== '');
  const makeStylesObject = (arr) =>
    arr.reduce((prev, item) => {
      const itemArr = item.trim().split(':');

      if (itemArr.length === 2) {
        prev[itemArr[0].trim()] = itemArr[1].trim();
      }

      return prev;
    }, {});

  const getStylesheet = (strStyles) =>
    makeStylesObject(filterBlankLines(splitedStylesString(strStyles)));

  const styles = getStylesheet(sourceString);

  return styles;
}

module.exports = convertToObject;
