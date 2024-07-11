'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.length) {
    return {};
  }

  const cssProperties = {};

  const styleDeclarations = sourceString.split(';');

  styleDeclarations.map((element) => {
    const newElement = element.trim();

    if (newElement.length) {
      let [title, value] = newElement.split(':');

      title = title.trim();
      value = value.trim();
      cssProperties[title] = value;
    }
  });

  // for (let element of styleDeclarations) {
  //   element = element.trim();

  //   if (element.length) {
  //     let [title, value] = element.split(':');

  //     title = title.trim();
  //     value = value.trim();
  //     cssProperties[title] = value;
  //   }
  // }

  return cssProperties;
}

module.exports = convertToObject;
