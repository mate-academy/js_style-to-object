/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');
  const styleProperties = splittedString.filter((row) => {
    return row && row.includes(':');
  });
  const styleAsObject = {};

  styleProperties.forEach((property) => {
    const [key, value] = property.split(':');

    styleAsObject[key.trim()] = value.trim();
  });

  return styleAsObject;
}

module.exports = convertToObject;
