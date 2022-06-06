// Regexp Substituição

// REFERÊNCIA DA SELEÇÃO
// É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

// Procura: Java
const regexpSE = /Java/g;

'PHP e Java são linguagens diferentes'.replace(regexpSE, '--$&Script');
// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java


// GRUPO DE CAPTURA
// É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
const regexp$1 = /(\w+)@[\w.]+/g;

'andre@email.com.br'.replace(regexp$1, '$1@gmail.com');
// andre@gmail.com


// MAIS DE UM GRUPO
// podemos definir quantos grupos de captura quisermos.

// Procura: sequência alfanumérica, seguida
// de , seguido espaço de sequência alfanumérica.
const regexpGR = /(\w+),\s(\w+)/g;

'Rafael, Andre'.replace(regexpGR, '$2 $1');
// Andre Rafael

// MAIS DO QUE CAPTURA APENAS
// Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.

// Procura: qualquer sequência de ta
const regexpCAP = /(ta)+/gi;

'Tatata, tata, ta'.replace(regexpCAP, 'Pá');
// Pá, Pá, Pá


// IGNORAR CAPTURA
// Utilize o (?:) para ignorar a captura

// Procura: qualquer sequência de ta
const regexpIG = /(?:ta)+/gi;

'Tatata, tata, ta'.replace(regexpIG, 'Pá');
// Pá, Pá, Pá


// POSITIVE LOOKAHEAD
// Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexpHead = /\d(?=px)/g;

'2em, 4px, 5%, 2px, 1px'.replace(regexpHead, 'X');
// 2em, Xpx, 5%, Xpx, Xpx

// NEGATIVE LOOKAHEAD
// Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.

// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexpNeHead = /\d(?!px)/g;

'2em, 4px, 5%, 5px, 1px'.replace(regexpNeHead, 'X');
// Xem, 4px, X%, 5px, 1px


// POSITIVE LOOKBEHIND
// Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.

// Procura: dígitos que possuírem R$
// na frente dos mesmos
const regexp = /(?<=R\$)[\d]+/g;

'R$99, 100, 200, R$20'.replace(regexp, 'X');
// R$X, 100, 200, R$X
