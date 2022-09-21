'use strict';

//  * @param {string} sourceString
//  *
//  * @return {object}
//  *
function convertToObject(sourceString) {
  const styleList = {};
  const styles = sourceString.split(';');

  styles.forEach((style) => {
    if (style.includes(':')) {
      const properties = style.slice(0, style.indexOf(':'));
      const values = style.slice(style.indexOf(':') + 1, style.length);

      styleList[properties.trim()] = values.trim();
    }
  });

  return styleList;
}

module.exports = convertToObject;
