'use strict';

function convertToObject(sourceString) {
  const object = {};
  const arrString = sourceString.split(';');

  const arrKeyValue = arrString.map(item =>
    item.trim().split(':').map(items => items.trim())
  );
  const resultKeyvalue = arrKeyValue.filter(item => item[0]);

  resultKeyvalue.forEach(item => {
    const [key, value] = item;

    return Object.assign(object, { [key]: value });
  });

  return object;
}

module.exports = convertToObject;
