'use strict';

/**
 * @param {string} sourceString
  *
   * @return {object}
    */
    function convertToObject(sourceString) {
      // write your code here
      const semEspaco = sourceString.trim();
      
      const linhaSolo = semEspaco.split(';').map((s) => s.trim());
        
      const obj = {};
      
      linhaSolo.forEach((element) => {
        const [property, value] = element.split(':').map((s) => s.trim());
        obj[property] = value;
      });
                  
      return obj;
    }
                      
    module.exports = convertToObject;
