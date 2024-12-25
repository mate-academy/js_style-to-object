'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.replaceAll('\n', ' ').split(';');
  const filtredStylesList = stylesList.filter((val) => val.trim().length > 0);

  const segregatedList = [];
  const stylesObject = {};

  function segregate(el) {
    const splited = el.split(':');

    for (let i = 0; i < splited.length; i++) {
      if (splited[i].length > 0) {
        segregatedList.push(splited[i].trim());
      }
    }
  }

  function makeSegregatedObject(el, index, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        stylesObject[arr[i]] = arr[i + 1].replaceAll(', ', ',\n');
      }
    }
  }

  filtredStylesList.forEach(segregate);
  segregatedList.forEach(makeSegregatedObject);

  return stylesObject;
}

module.exports = convertToObject;
