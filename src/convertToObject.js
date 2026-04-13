'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styleEntry) => styleEntry.trim())
    .filter((styleEntry) => styleEntry)
    .reduce((stylesObject, styleEntry) => {
      const [property, ...valueStyleEntry] = styleEntry.split(':');

      if (property && valueStyleEntry.length) {
        stylesObject[property.trim()] = valueStyleEntry.join(':').trim();
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
