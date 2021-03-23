/*
console.log('Меня зовут ' + shkot + ', я работаю ' + job + cep)*/
/*
const age =  prompt('Введите возраст')
alert('Ты ' + shkot + ' ' + job +' ' + age )*/
/*const currentYear = 2021
const age  = currentYear - smartBirth
console.log( age)*/
/*const a = 10
const b = 5
let c = 32*/
/*console.log(a + b)
console.log(a-b)
console.log(a*b)
console.log(a/b)*/
/*console.log(++smartBirth)
console.log(smartBirth)*/
/*
c += smartBirth
console.log(c)*/
/*
console.log(typeof job)
console.log(typeof smartBirth)
console.log(typeof boolean)*/

/*
let shkot = 'Denis'
const javaScript = true
const job = 'SEO'
const cep = 'ЭЙ посмотри,два мульта на мне часы'
const boolean = true
let smartBirth = 2013
let currentYear = 2021
let smartAge = 8
const isFullYear = currentYear - smartBirth >= smartAge
/!*
console.log(isFullYear)
*!/
const knowJS = "done" // Not done, done, fail

if (knowJS === 'done'){
    console.log('Ты прошёл весь курс')
}
else if (knowJS === 'Not done'){
    console.log('Ты не прошёл курс')
}
else if (knowJS === 'fail'){
    console.log('Ты проебал курс')
}

const fish = true
const cat = true
console.log(fish || cat)
console.log (fish || fish)
console.log (fish && cat)
console.log (!fish)
*/
/*
if(fish){
    console.log('Да,рыба')
}
else{
    console.log('Не рыба')
}*/
/*
Запомнить
fish ? console.log('Да,рыба') : console.log('Не рыба')
*/

function plus() {

let num1 = document.getElementById('num1').value;
num1 = parseInt(num1);

let num2  = document.getElementById('num2').value;
num2 = parseInt(num2);

let result = num1 + num2;

document.getElementById('out').innerHTML = result;


}

function minus(){

    let num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    let num2  = document.getElementById('num2').value;
    num2 = parseInt(num2);

    let result = num1 - num2;

    document.getElementById('out').innerHTML = result;


}