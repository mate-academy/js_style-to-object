'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourseArr = sourceString.split('\n');

  const result = sourseArr.reduce((acc, el) => {
    const parts = el.split(':');
    const key = parts[0].trim();

    let value = parts
      .slice(1)
      .toString()
      .trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1);
    }

    if (key === 'clear') {
      value = value.trim();
    }

    acc[key] = value;

    return acc;
  }, {});

  delete result[''];
  delete result[';'];

  return result;
}

module.exports = convertToObject;
