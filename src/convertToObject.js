'use strict';

function convertToObject(sourceString) {
  const arrayCss = sourceString
    .split(';')
    .map(item => item.replace(/\s+/g, ' ').trim())
    .filter(el => el !== '');

  const cssObjProp = arrayCss.reduce(function(obj, str) {
    const property = str.split(':');
    const propName = property[0].trim();
    const propValue = property[1].trim();

    obj[propName] = propValue;

    return obj;
  }, {});

  return cssObjProp;
}

module.exports = convertToObject;
