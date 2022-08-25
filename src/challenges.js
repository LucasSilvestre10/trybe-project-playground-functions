// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = [];
  array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function descobrirMaior(array) {
  let maior = 0;
  let iMaior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[iMaior]) {
      iMaior = index;
    }
    maior = array[iMaior];
  }
  return maior;
}

function highestCount(array) {
  let maior = descobrirMaior(array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);
  if (gato2 === gato1) {
    return 'os gatos trombam e o rato foge';
  } if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let list = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      list.push('fizzBuzz')
    } else if (array[index] % 3 === 0) {
      list.push('fizz')
    } else if (array[index] % 5 === 0) {
      list.push('buzz')
    } else {
      list.push('bug!')
    }
  }
  return list;
}

// Desafio 9
function encode(palavra) {
  let result = palavra.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return result;
}
function decode(palavra) {
  let result = palavra.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return result;
}

// Desafio 10
function techList(array, name) {
  let objeto = [];
  let ordenado = array.sort();
  if (ordenado.length > 0) {
    for (let index = 0; index < ordenado.length; index += 1) {
      objeto.push({
        tech: ordenado[index],
        name,
      });
    }
    return objeto;
  }
  return 'Vazio!';
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
