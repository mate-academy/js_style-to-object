
function convertToObject(sourceString) {
  // write your code here
    const separator = ';';
    const styles = sourceString.split(separator);
    const object = {};

    for (const style of styles) {
      const [property, value]  = style.split(':');

      if (property && value) {
        object[property.trim()] = value.trim();
      }
    }

    return object;
}

module.exports = convertToObject;
