'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styleArr = [];
  let propertyName = '';
  let propertyValue = '';

  let sourceStringMod = sourceString.split('\n').join('');

  sourceStringMod = sourceStringMod.replaceAll('\t', '');
  styleArr = sourceStringMod.split(';');

  return styleArr.reduce((cssObject, item) => {
    if (item.trim() !== '') {
      propertyName = item.split(':')[0];

      if (item.split(':')[1].split(',').length > 1) {
        propertyValue = item.split(':')[1].split(',').join(',\n');
      } else {
        propertyValue = item.split(':')[1];
      }

      cssObject[propertyName.trim()] = propertyValue.trim();
    }

    return cssObject;
  }, {});
}

module.exports = convertToObject;
