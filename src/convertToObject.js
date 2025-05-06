'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arry = sourceString.split(';');

  const cleanArry = arry.map((el) => el.trim()).filter((el) => el.length > 0);

  for (const che of cleanArry) {
    const [prop, ...valueParts] = che.split(':');
    const key = prop.trim();
    const value = valueParts.join(':').trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
