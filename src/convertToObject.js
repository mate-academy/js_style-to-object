'use strict';

function convertToObject(sourceString) {
  const stylesArray = sourceString.split('\n');

  const filteredStylesArray = stylesArray
    .filter(style => /[a-zA-Z]/g.test(style))
    .map(style => style.split(':'));

  return filteredStylesArray.reduce((styleObject, current) => {
    const property = current[0].trim();
    const value = current[1].replace(';', '').trim();

    return {
      ...styleObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
