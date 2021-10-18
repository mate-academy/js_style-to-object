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
  let rows = '';

  for (const letter of sourceString) {
    if (letter !== '\n') {
      rows = rows + letter;
    };
  };

  const splitRows = rows.split(';').filter(x =>
    x.includes(':')).map(x => x.split(':')).map(x =>
    x[0].trim() + ':' + x[1].trim()).map(x => x.split(':'));

  const callback = (prev, x) => ({
    ...prev,
    [x[0]]: x[1],
  });

  const result = splitRows.reduce(callback, {});

  return result;
};

module.exports = convertToObject;
