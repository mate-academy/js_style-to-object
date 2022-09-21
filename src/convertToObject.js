'use strict';

function convertToObject(sourceString) {
  const stylesArr = sourceString
    .split(';')
    .map(prop => prop.trim())
    .filter(prop => prop !== '');

  const properties = stylesArr.reduce((propertiesObj, part) => {
    const [propKey, propValue] = part.split(':');

    propertiesObj[propKey.trim()] = propValue.trim();

    return propertiesObj;
  }, {});

  return properties;
}

module.exports = convertToObject;
