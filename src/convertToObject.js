'use strict';

function convertToObject(sourceString) {
  const argTrimed = sourceString.trim();
  const splitedArr = argTrimed.split('\n').map(el => el.trim());
  const splitedEl = splitedArr.reduce((res, el) => {
    const arrFromEl = el.split(':');

    if (arrFromEl[1]) {
      if (arrFromEl[1].slice(-1) === ';') {
        arrFromEl[1] = arrFromEl[1].slice(0, -1);
      }

      res.push(arrFromEl.map(item => item.trim()));

      return res;
    }

    return res;
  }, []);

  return Object.fromEntries(splitedEl);
};

module.exports = convertToObject;
