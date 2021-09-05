'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrEachStyle = sourceString.split(';');
  const fullStr = arrEachStyle.filter(item => /\S/.test(item));
  const arrAllStyle = fullStr.reduce((prev, item) => {
    const eachPropertie = item.split(':');
    const withoutSpace = eachPropertie.map(element => element.trim());

    return {
      ...prev, [withoutSpace[0]]: withoutSpace[1],
    };
  }, {});

  return arrAllStyle;
}

module.exports = convertToObject;
