'use strict';

const SEPARATOR_ROW = ';';
const SEPARATOR_KEY_VALUE = ':';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectifiedValues = {};

  const keyValueRows = sourceString.split(SEPARATOR_ROW);

  for (const row of keyValueRows) {
    const [key, value] = row.split(SEPARATOR_KEY_VALUE);

    if (!(key && value)) {
      continue;
    }

    const sanitizedKey = key.trim();
    const sanitizedValue = value.trim();

    objectifiedValues[sanitizedKey] = sanitizedValue;
  }

  return objectifiedValues;
}

module.exports = convertToObject;
