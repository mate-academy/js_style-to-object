'use strict';

function convertToObject(sourceString) {
  const styles = {};

  const stylesArr = sourceString.trim().split(';');

  stylesArr.map(item => {
    const element = item.split(':');

    if (element[1]) {
      styles[element[0].trim()] = item.split(':')[1].trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
