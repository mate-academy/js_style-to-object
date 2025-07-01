'use strict';

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

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayStylesWithoutSemicolones = sourceString
    .replaceAll(';', ':')
    .split(':');
  const arrayTrim = arrayStylesWithoutSemicolones.map((x) => x.trim());
  const arrayFilter = arrayTrim.filter((x) => x !== '');
  const arrayKeys = arrayFilter.filter((x, i) => i % 2 === 0);
  const arrayValues = arrayFilter.filter((x, i) => i % 2 !== 0);

  return createObject(arrayKeys, arrayValues);
}

function createObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
