'use strict';

function convertToObject(sourceString) {
  const styles = sourceString.trim().split(/\s*;\s*/);
  const stylesObject = {};

  for (let i = 0; i < styles.length; i++) {
    const styleArr = styles[i].split(/\s*:\s*/);

    if (styleArr.length === 2) {
      stylesObject[styleArr[0]] = styleArr[1];
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
