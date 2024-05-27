'use strict';

function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const firstObrabotka = sourceString;

  const bigArr = firstObrabotka.split(';');

  const arrFinal = bigArr.filter((str) => str.trim() !== '');

  let smallArr;
  const result = {};

  for (let i = 0; i < arrFinal.length; i++) {
    smallArr = arrFinal[i].split(':');

    const key = smallArr[0].trim();
    const value = smallArr[1].trim();

    result[key] = value;
  }

  return result;
}

const complexStylesString = `
  margin: 0    auto;
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

convertToObject(complexStylesString);

module.exports = convertToObject;
