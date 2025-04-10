'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesObject = {};

  sourceString
    .split(';')
    .map((a) => a.trim())
    .filter((a) => a !== '')
    .reduce((props, row) => {
      const splittedRow = row.split(':');

      props[splittedRow[0].trim()] = splittedRow[1].trim();

      return props;
    }, propertiesObject);

  return propertiesObject;
}

module.exports = convertToObject;
