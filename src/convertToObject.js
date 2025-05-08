'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringsArray = sourceString.split(';');
  const processedArray = stringsArray
    .map((elem) => elem.trim())
    .filter((elem) => elem.includes(':') && elem.length > 0);

  const pairs = processedArray.map((item) => {
    const [key, ...valuePairs] = item.split(':');
    const value = valuePairs.join(':').trim();

    return [key.trim(), value];
  });

  const result = pairs.reduce((prev, value) => {
    return { ...prev, [value[0]]: value[1] };
  }, {});

  return result;
}

module.exports = convertToObject;
