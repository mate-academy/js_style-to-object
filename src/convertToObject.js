'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const arrayOfItems = sourceString
    .split(';') // ['ключ : свойство','ключ:свойство']
    .filter((item) => item.includes(':')) // убираем  пустые элементы
    .map((elem) => elem.split(':')); //[[ключ, свойство], [ключ, свойство]]

  arrayOfItems.forEach((unit) => {
    const key = unit[0].trim();
    const value = unit[1].trim();

    cssProperties[key] = value;
  });
  return cssProperties;
}

module.exports = convertToObject;
