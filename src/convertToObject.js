'use strict';

function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const initialData = sourceString;

  const arrOfInitialData = initialData
    .split(';')
    .filter((str) => str.trim() !== '');

  const finalRes = arrOfInitialData.map((item) => {
    const [key, value] = item.split(':').map((string) => string.trim());

    return [key, value];
  });

  const resultObj = Object.fromEntries(finalRes);

  return resultObj;
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
