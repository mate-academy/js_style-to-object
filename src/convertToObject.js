'use strict';

function convertToObject(sourceString) {
  const objectSplit = sourceString.split(';');
  const trimArr = objectSplit.map(item => item.trim());
  const splitArr = trimArr.map(item => item.split(' '));
  const filterArr = splitArr.map(item => item.filter(word => word !== ''));
  const joinArr = filterArr.map(item => item.join(' '));
  const cleanArr = joinArr.filter(item => item !== '');
  const newArr = cleanArr.map(str => str.replace(' :', ':'));
  
  const obj = {};

  newArr.forEach((item) => {
    const [key, value] = item.split(': ');

    obj[key] = value;
  });

  return obj;
};

module.exports = convertToObject;
