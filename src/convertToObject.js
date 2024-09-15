'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arr = sourceString.split(';');
  arr.pop();
  const newObj = {};

  const callback = (inpuItem) => {
    arr = inpuItem.trim().split(':');
    newObj[arr[0]] = arr[1].trim();
  };

  arr.forEach(callback);
  return newObj;
}

module.exports = convertToObject;
