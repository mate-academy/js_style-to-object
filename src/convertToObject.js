'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.replace(/\s+/g, ' ').split(';');

  return array.reduce((object, element, index) => {
    const key = element.slice(0, element.indexOf(':')).trim();
    const value = element.slice(element.indexOf(':') + 1,
      element.length).trim();

    return element.includes(':')
      ? {
        ...object,
        [key]: value,
      }
      : object;
  }, {});
}

module.exports = convertToObject;
