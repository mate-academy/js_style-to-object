'use strict';

/*
 * @param {string} sourceString
 * @return {objectOfValueect}
 */

function convertToobjectOfValuect(sourceString) {
  const arraySourcesString = sourceString.split(';');
  const objectOfValue = {};

  arraySourcesString.forEach(element => {
    const arrayKeyValue = element.split(':');

    if (arrayKeyValue.length === 2) {
      objectOfValue[arrayKeyValue[0].trim()] = arrayKeyValue[1].trim();
    }
  });

  return objectOfValue;
}

module.exports = convertToobjectOfValuect;
