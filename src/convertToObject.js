'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringRight
  = sourceString.replace(/ +/g, '')
    .replace(/\n/g, '')
    .replace(/;+/g, ';')
    .replace(/:/g, ': ')
    .replace(/;/g, ';  ')
    .trim();
  const sourceArrey
  = sourceStringRight
    .split('  ')
    .map(item => item.split(' '))
    .map(item => item.map(i => i.slice(0, -1)))
    .map(function(i) {
      const change = i[1];
      let res = '';

      for (let n = 0; n < change.length; n++) {
        res += (change[n] === '.'
        || change[n] === '!'
        || change[n] === '#')
          ? ' ' + change[n]
          : change[n];

        if (isFinite(change[n - 1])) {
          switch (change[n]) {
            case 'p':
              res += change[n + 1] + ' ';
              n = n + 1;
              break;
            case 's':
              res += ' ';
              break;
          }
        }
      }

      const result = [];

      result.push(i[0], res.trim());

      return result;
    });
  const object = {};

  sourceArrey.map(item => {
    object[item[0]] = item[1];
  });

  return object;
}

module.exports = convertToObject;
