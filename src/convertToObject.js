'use strict';

/** *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converted = {};
  const getArray = sourceString.split(';');

  getArray.map((item) => {
    const getValues = item.split(':');

    if (getValues.length === 2) {
      const getKey = getValues[0].trim();
      const getValue = getValues[1].trim();

      converted[getKey] = getValue;
    }
  });

  return converted;
};

module.exports = convertToObject;
