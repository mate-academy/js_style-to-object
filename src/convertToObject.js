'use strict';

function convertToObject(sourceString) {
  let sourceArr = sourceString;

  sourceArr = sourceArr.split(';');
  sourceArr = sourceArr.filter((item) => item.trim() !== '');

  const sourceToObject = sourceArr.reduce((acc, source) => {
    const sourceEle = source.split(':');

    const key = sourceEle[0].trim();
    const value = sourceEle[1].trim();

    acc[key] = value;

    return acc;
  }, {});

  return sourceToObject;
}

module.exports = convertToObject;
