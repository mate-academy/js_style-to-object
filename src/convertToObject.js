'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const parts = sourceString
    .split(';')
    .map((x) => x.trim())
    .filter((x) => x.length)
    .map((x) => {
      const i = x.indexOf(':');

      if (i === -1) {
        return null;
      } else {
        const key = x.slice(0, i).trim();
        const value = x.slice(i + 1).trim();

        return [key, value];
      }
    })
    .filter((x) => Array.isArray(x) && x.length === 2);

  const stylesObject = parts.reduce((styles, [key, value]) => {
    styles[key] = value;

    return styles;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;

// parts com Split =
/* ['background-color:      #fff;',
'-webkit-border-radius: 5px;',
'  border-radius     : 5px;',
'  border: 1px solid #e8e8e8   ';'] */

/* parts com map e trim
  Map vai iterar por cada elemento e aplicar trim
  em cada (trim vai remover espaços no começo e no fin)

  parts com map e trim = [
'background-color:      #fff;',
'-webkit-border-radius: 5px;',
'border-radius     : 5px;',
'border: 1px solid #e8e8e8;'] */

/* parts com filter
Esse filtro remove elementos vazios — ou seja,
qualquer item com .length === 0 será excluído.

*/

/* parts com map. Nesse passo o map vai iterar por cada elemento e retornar o
indice de ':'
[
'background-color:      #fff;',
'-webkit-border-radius: 5px;',
'border-radius     : 5px;',
'border: 1px solid #e8e8e8;']

se a posição do ':' for -1 significa que ':' nao existe no elemento
se não, crie a variavel key e atribua o elemento que fica antes de
':' usando o slice.
fica assim: key = ['background-color:'], ['-webkit-border-radius:']
mesma coisa para value, só que agora pegamos o elemento depois de ':',
fica assim: value = ['#fff'], ['5px;']. lembrando que o trim remove os espaços
desses elementos.

return [key, value] em 1 só array.
fica assim:
[
['background-color:', '#fff'],
['-webkit-border-radius', '5px;']
]
filter.length elimina elementos vazios
slice(0, 2) cria arrays com start em 0 e end em 2
- Extrai os dois primeiros elementos do array filtrado.
- slice(início, fim) retorna uma cópia parcial do array.
- Não altera o array original(ele não inclui o elemento numero 2, end)

*/
