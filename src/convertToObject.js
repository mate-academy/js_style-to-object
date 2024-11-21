'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const bigArray = sourceString.split(';');

  return bigArray.filter(filt).reduce(callback, {});

  function callback(prev, item) {
    // prev['background-color'] = '#fff';
    const smallArray = item.split(':');

    const key = smallArray[0].trim();
    const value = smallArray[1].trim();

    if (key && value) {
      prev[key] = value;
    }

    return prev;
  }

  function filt(item) {
    return item && item.includes(':');
  }
}

module.exports = convertToObject;
