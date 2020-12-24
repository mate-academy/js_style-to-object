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

  const styles1 = sourceString.split(';');

  const styles2 = styles1.map((elem) => elem.split(':'));

  const styles3 = styles2.map((elem) => elem.map((item) =>
    item.replace(/\s+/g, ' ')));

  const styles4 = styles3.filter(elem => elem.length > 1);

  const styles5 = styles4.map(elem => elem.map((item) =>
    item.trim()));

  const res = {};

  for (const elem of styles5) {
    res[elem[0]] = elem[1];
  }

  return res;
}

module.exports = convertToObject;
