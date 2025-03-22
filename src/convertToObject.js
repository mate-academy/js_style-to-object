'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */

const complexStylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;

function convertToObject(sourceString) {
  return sourceString
    .split(';') // Розділяємо рядок на окремі CSS-властивості
    .filter((style) => style.trim() !== '') // Видаляємо порожні рядки
    .reduce((accum, style) => {
      const parts = style.split(':'); // Розділяємо ключ і значення

      if (parts.length === 2) {
        const key = parts[0].trim(); // Видаляємо пробіли у ключа
        const value = parts[1].trim(); // Видаляємо пробіли у значення

        accum[key] = value; // Додаємо в об'єкт
      }

      return accum; // Повертаємо оновлений об'єкт
    }, {}); // Початкове значення – порожній об'єкт
}
convertToObject(complexStylesString);
module.exports = convertToObject;
