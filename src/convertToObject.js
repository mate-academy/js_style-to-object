'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');

  const fixedPairs = arr.map((item) => {
    let newItem = item.split(':');

    newItem = newItem.map((subitem) => subitem.trim());

    return newItem;
  });

  const fixedEmptySlots = fixedPairs.filter(
    (item) => item[0].length > 0 && item[1].length > 0,
  );

  const result = fixedEmptySlots.reduce((obj, item) => {
    return { ...obj, [item[0]]: item[1] };
  }, {});

  return result;
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

module.exports = convertToObject;
