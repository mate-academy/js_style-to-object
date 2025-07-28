'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const makeArray = sourceString.split(';');
  const filtered = makeArray.filter((delEmpty) => delEmpty.trim() !== '');

  return filtered.reduce((obiekt, elementObiektu) => {
    const [key, value] = elementObiektu.split(':');

    obiekt[key.trim()] = value.trim();

    return obiekt;
  }, {});
}

module.exports = convertToObject;
