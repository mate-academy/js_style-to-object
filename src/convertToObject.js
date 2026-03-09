'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const TEXT_SPLIT_OPERATOR = ';';
  const LINE_SPLIT_OPERATOR = ':';

  const finalCssObject = sourceString
    .split(TEXT_SPLIT_OPERATOR)
    .filter((line) => line?.trim().length > 0)
    .reduce((acc, line) => {
      const [key, value] = line.split(LINE_SPLIT_OPERATOR);

      acc[key.trim()] = value.trim();

      return acc;
    }, {});

  return finalCssObject;
}

module.exports = convertToObject;
