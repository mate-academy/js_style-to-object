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
  const splitedRows = sourceString.split(';').map(el => el.trim());
  const filteredRows = splitedRows.filter(el => el.length !== 0);

  const convertedStyles = filteredRows.reduce((acc, item) => {
    const [key, value] = item.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return convertedStyles;
}

module.exports = convertToObject;
