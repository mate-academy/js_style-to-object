'use strict';

function convertToObject(sourceString) {
  const stylesObj = {};
  const arrStyles = sourceString
    .split(';')
    .map(str => str.trim())
    .filter(style => style.length > 0)
    .map(element => element.split(':').map(property => property.trim()));

  arrStyles.forEach(property => {
    const [prop, value] = property;

    stylesObj[prop] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
