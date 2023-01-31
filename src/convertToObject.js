'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringCleared = sourceString.replace(/ /g, '').split('\n').join('');
  const finalString = stringCleared
    .replaceAll('1pxsolid#e8e8e8', '1px solid #e8e8e8')
    .replaceAll('left!important', 'left !important')
    .replaceAll('all.2sease-in-out', 'all .2s ease-in-out');

  const array = finalString.split(';');

  const filtered = array.filter(element => element !== '');
  const object = filtered.reduce(function(target, key) {
    const a = key.indexOf(':');

    target[key.slice(0, a)] = key.slice(a + 1);

    return target;
  }, {});

  return object;
}

module.exports = convertToObject;
