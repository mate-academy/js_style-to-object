'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr_ = sourceString.split(';');

  const separ = arr_.map(elem => {
    const index_ = elem.indexOf(':');

    const obj_ = index_ >= 0
      ? [elem.slice(0, index_), elem.slice(index_ + 1,)]
      : undefined;

    return obj_;
  });

  const newObj = {};

  for (const x of separ) {
    if (x !== undefined) {
      newObj[x[0].replace(/\n/g, '').trim()] = x[1].trim();
    }
  }

  return newObj;
}

module.exports = convertToObject;
