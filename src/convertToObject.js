'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const arrayString = sourceString.split(';');
  const styleArray = arrayString
    .map(style => style.replace('\n\n\n', ''))
    .map(style => style.replace('\n\n', ''))
    .map(style => style.replace('\n', ''))
    .map(style => style.split(':'));

  const result = styleArray.map(style => {
    return style.map(v => v.trim()).filter(v => v !== '');
  }).filter(v => v.length > 1)
    .map(style => style);

  result.forEach(v => {
    const [key, value] = v;

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
