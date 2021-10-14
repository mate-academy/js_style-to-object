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

  const splitRows = rows.split(';');

  const filterRows = splitRows.filter(x => x.includes(':'));

  const splitRows2 = filterRows.map(x => x.split(':'));

  const trimRows = splitRows2.map(x => x[0].trim() + ':' + x[1].trim());

  const splitRows3 = trimRows.map(x => x.split(':'));

  const callback = (prev, x) => ({
    ...prev,
    [x[0]]: x[1],
  });

  const result = splitRows3.reduce(callback, {});

  return result;
};

module.exports = convertToObject;
