'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const resultObject = {};

  const parseArray = sourceString.split(';');

  // const filteredArray = partsOfString.filter((row) => row.includes(':'));

  for (let element of parseArray) {
    element = element.trim();

    if (element.length) {
      let [title, value] = element.split(':');

      title = title.trim();

      value = value.trim();

      if (value.endsWith(';')) {
        value = value.slice(0, -1);
      }

      value = value.trim();
      resultObject[title] = value;
    }
  }

  return resultObject;
}

module.exports = convertToObject;
