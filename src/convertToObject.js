'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedSource = sourceString.split(';');

  return splittedSource.reduce((prevResult, item) => {
    if (!item) {
      return prevResult;
    }

    const [name, value] = item.split(':');

    if (!name || !value) {
      return prevResult;
    }

    prevResult[name.trim()] = value.trim();

    return prevResult;
  }, {});
}

module.exports = convertToObject;
