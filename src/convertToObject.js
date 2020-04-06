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
    const arrСouples = [];
    const arrProperties = sourceString.split(';');

    for (let element of arrProperties) {
      let couple = element.split(':').map(item => item.trim());
      arrСouples.push(couple);
    }

    const arrAfterFilter = arrСouples.filter(item => item.length > 1);
    return Object.fromEntries(arrAfterFilter);

}

module.exports = convertToObject;
