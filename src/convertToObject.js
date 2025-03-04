'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(convertableString) {
  const objectToReturn = {};
  const normalizedArray = convertableString
    .split(';')
    .map((part) => part.trim())
    .filter((element) => element.length > 0);

  fixAndMerge(normalizedArray, objectToReturn);

  return objectToReturn;
}

function fixAndMerge(array, object) {
  for (const element of array) {
    let key = element.split(':')[0].trim();
    const valOfKey = element.split(':')[1].trim();

    if (key.includes('-')) {
      key = `'${key}'`;
    }

    object[key] = valOfKey;
  }
}

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

convertToObject(complexStylesString);
