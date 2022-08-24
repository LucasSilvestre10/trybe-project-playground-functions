
function teste1(params) {

    if (params % 3 === 0 && params % 5 !== 0) {
        return true;
    }
}
function teste2(params) {
    if (params % 5 === 0 && params % 3 !== 0) {
        return true;
    }
}
function teste3(params) {
    if (params % 3 === 0 && params % 5 === 0) {
        return true;
    }
}

function fizzBuzz(array) {
    let fizzBuuz = [];
    for (let index = 0; index < array.length; index += 1) {
        if (teste1(array[index])) {
            fizzBuuz.push('fizz');
        } else if (teste2(array[index])) {
            fizzBuuz.push('buzz');
        } else if (teste3(array[index])) {
            fizzBuuz.push('fizzBuzz');
        } else {
            fizzBuuz.push('bug');
        }
    }
    return fizzBuuz;
}



console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
