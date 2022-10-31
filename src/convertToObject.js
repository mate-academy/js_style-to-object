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
  const mapedString = sourceString.split(';').map(row => row.trim());
  const filteredString = mapedString.filter(row => row !== '');

  const convertedString = filteredString.reduce((prev, user) => {
    const arrForObj = user.split(':');

    return {
      ...prev,
      [arrForObj[0].trim()]: arrForObj[1].trim(),
    };
  }, {});

  return convertedString;
}

module.exports = convertToObject;
