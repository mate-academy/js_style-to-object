'use strict';

//  * @param {string} sourceString
//  *
//  * @return {object}
//  *
function convertToObject(sourceString) {
  const StyleList = {};
  const styles = sourceString.split(';');

  styles.forEach((style) => {
    if (style.includes(':')) {
      const properties = style.slice(0, style.indexOf(':'));
      const values = style.slice(style.indexOf(':') + 1, style.length);

      StyleList[properties.trim()] = values.trim();
    }
  });

  return StyleList;
}

module.exports = convertToObject;
