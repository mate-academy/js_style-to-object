'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {}; // Обработка пустой строки
  }

  const arrayOfStyles = sourceString.split(';');

  const result = {}; // создаем объект

  arrayOfStyles.forEach((element) => {
    // перебираем каждый элемент массива
    const [key, ...rawValue] = element.split(':').map((item) => item.trim());

    const value = rawValue.join(':');

    if (key && value) {
      result[key] = value;
    }
  });

  return result; // возвращаем объект
}

module.exports = convertToObject;
