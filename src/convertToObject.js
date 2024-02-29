'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
const splitSourceString = sourceString.split(';');
const objResult = {};
const filterString = splitSourceString.filter((prop) => prop.length > 4);

 filterString.forEach(entrys => {
    const entrySplit = entrys.split(':');

    const trimProperty = entrySplit[0].trim();
    const trimValue = entrySplit[1].trim();

    objResult[trimProperty] = trimValue;
 });

 return objResult;

}

module.exports = convertToObject;
