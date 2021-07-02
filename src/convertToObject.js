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
  const arr = sourceString.split(';');
  const splitToKey = arr.map(a => a.split(':'));
  const emptyKeysDelete = splitToKey.filter(x => x.length > 1);
  const spaceDelete = emptyKeysDelete.map(i =>
    i.map(value => value.trim())
  );
  const obj = Object.fromEntries(spaceDelete);

  return obj;
}

module.exports = convertToObject;
