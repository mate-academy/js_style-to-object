'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  /* Разбиваем строку со стилями на массив объектов arr,
  в каждом элементе которого записано одно свойство из стилей. */
  const arr = sourceString.split(';');

  let arr2 = [];
  const obj = {};

  // Удаляем последний элемент массива arr - перенос строки.
  arr.pop();

  // Элементы массива arr разбиваем по : на две части и записываем в объект.
  arr.forEach(item => {
    arr2 = item.split(':');
    obj[arr2[0].trim()] = arr2[1].trim();
  });

  /* Вариант 2:
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr[i].trim().split(': ');
    obj[arr2[0]] = arr2[1];
  } */

  return obj;
}

module.exports = convertToObject;
