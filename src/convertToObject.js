'use strict';

function convertToObject(sourceString) {
  const arrayStyles = sourceString
    .split(';')
    .map(property => property.split(':'));

  const deleteGap = arrayStyles
    .map(items => items.map(element => element.trim()))
    .filter(item => item.length > 1);

  return deleteGap.reduce((accum, style) => {
    return {
      ...accum,
      [style[0]]: style[1],

    };
  }, {});
}

module.exports = convertToObject;
