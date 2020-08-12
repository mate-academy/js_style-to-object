'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString
    .split(';')
    .filter(Boolean)
    .map(elem => elem.replace(/\s+/, ''))
    .filter(Boolean);

  const func = (a, b) => {
    const property = (b.split(':')
      .map(elem => elem.split(' ').filter(Boolean).join(' '))
    );

    return {
      ...a,
      [property[0]]: property[1],
    };
  };

  return arr.reduce(func, {});
}

module.exports = convertToObject;
