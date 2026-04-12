'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const cleanString = sourceString.replace(/\n/g, '\n').replace(/\t/g, ' ');

  cleanString.split(';').forEach((item) => {
    const cleanItem = item.trim();

    if (!cleanItem || !cleanItem.includes(':')) {
      return;
    }

    const index = cleanItem.indexOf(':');

    const key = cleanItem.slice(0, index);
    const value = cleanItem.slice(index + 1);

    let cleanValue = value.trim();

    if (cleanValue.endsWith(';')) {
      cleanValue = cleanValue.slice(0, -1);
    }

    cleanValue = cleanValue.trim();

    result[key.trim()] = cleanValue;
  });

  return result;
}

module.exports = convertToObject;
