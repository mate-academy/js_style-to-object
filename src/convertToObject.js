'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringSplited = sourceString.split(';');

  const stringSplitedTwo = stringSplited.map((item) => item.split(':'));
  const filterString = stringSplitedTwo.filter((pair) => pair.length >= 2);
  const styleObject = filterString.reduce((res, pair) => {
    res[pair[0].trim()] = pair[1].trim();

    return res;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
