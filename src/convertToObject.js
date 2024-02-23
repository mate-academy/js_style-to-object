'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitedRows = sourceString.split(';');
  const trimmedSplitedRows = splitedRows.map(el => el.trim());
  const filteredRows = trimmedSplitedRows.filter(el => el.length !== 0);

  const result = filteredRows.reduce((acc, item) => {
    const [key, value] = item.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
