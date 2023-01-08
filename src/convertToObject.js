'use strict';

function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .filter(style => style.length > 1 && style.includes(':'));

  return cssStyles.reduce((cssStylesObj, style) => {
    const [key, value] = style.split(':');

    cssStylesObj[key.trim()] = value.trim();

    return cssStylesObj;
  }, {});
}

module.exports = convertToObject;
