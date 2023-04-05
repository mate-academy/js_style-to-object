'use strict';

function convertToObject(sourceString) {
  const object = {};
  const arrString = sourceString.split(';');

  const arrKeyValue = arrString.map(item => {
    const normalized = (item.trim().split(':')).map(items => items.trim());

    return normalized;
  });

  const resultKeyvalue = arrKeyValue.filter(item => item[0] !== '');

  resultKeyvalue.forEach(item => {
    const key = item[0];
    const value = item[1];

    return Object.assign(object, { [key]: value });
  });

  return object;
}

module.exports = convertToObject;
