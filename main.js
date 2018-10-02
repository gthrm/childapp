// *** Константы и основные переменные ***
const sm = 39;
const startX = 35; //значение от начала конваса до цифры 0 в пиксеях
const startY = 270; //20 px до линейки в спрайте, и 150 px от края convas до спрайта
const pi = Math.PI;
let a = randomInteger(6, 9);
let ab  = randomInteger(11, 14);
let b = ab - a;

// *** Функция для генерации чисел ***

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  };

  console.log(a, '+', b, '=', ab);

// *** Функция отрисовки линии ***

function getLine (type, ver) {
    if (type === a && ver == 1) {
        let radius = sm * a/2;
        // Новое рисование
        ctx.beginPath();

        // Рисовка
        ctx.arc(startX+radius, startY, radius, 0, pi, true);

        // Укажем стиль линии и обведем ее
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Нарисуем стрелку на конце дуги
        
        ctx.beginPath();
        ctx.moveTo(startX+a*sm, startY);
        ctx.lineTo(startX+a*sm+5, startY-15);
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(startX+a*sm, startY);
        ctx.lineTo(startX+a*sm-7, startY-15);
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();

        
    } else if (type === b && ver == 2) {
        let radius = sm * b/2;
        // Новое рисование
        ctx.beginPath();

         // Рисовка
        ctx.arc(startX+a*sm+radius, startY, radius, 0, pi, true);
        
        // Укажем стиль линии и обведем ее
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Нарисуем стрелку на конце дуги
        
        ctx.beginPath();
        ctx.moveTo(startX+a*sm+b*sm, startY);
        ctx.lineTo(startX+a*sm+b*sm+5, startY-15);
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(startX+a*sm+b*sm, startY);
        ctx.lineTo(startX+a*sm+b*sm-7, startY-15);
        ctx.strokeStyle = "rgb(172, 82, 122)";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

};

// *** Функция установки импутов

function getInput(numIn) {
    if (numIn == 1){
        let left = startX + a/2 * sm - 14; //10px половина ширины инпута, 4px отступы
        let bottom = a * sm / 2 + 140; // 100px до линии, 30px размер инпута, 10px отступ
        let input = document.getElementById('in1');
        let inputNoVis = document.getElementById('in2');
        inputNoVis.style.visibility = "hidden";
        input.style.cssText =
        `left: `+ left +`px; \
        bottom: `+ bottom +`px; \
      `;
        setFocus('in1');
    } else if (numIn == 2){
        let left = startX + a * sm + b/2 * sm - 14; //10px половина ширины инпута, 4px отступы
        let bottom = b * sm / 2 + 140; // 100px до линии, 30px размер инпута, 10px отступ
        let input = document.getElementById('in2');
        // console.log(input);
        input.style.visibility = "visible";
        input.style.cssText =
        `left: `+ left +`px; \
        bottom: `+ bottom +`px; \
      `;
        setFocus('in2');
    };
    
};

//Функция замены h1 числом

function reNum(num) {
    if (num == 1){
        let from = document.getElementById('A');
        from.innerHTML = a;
    } else if (num == 2){
        let from = document.getElementById('B');
        from.innerHTML = b;
    } else if (num == 3){
        let from = document.getElementById('AB');
        from.innerHTML = ab;
    } else {
        console.log('Err');
    };
};

// *** Функция преобразовывающая импуты в текст ***

function inputOnText(type) { //type = a - первый ипут, type = b - второй импут
    if (type == "a") {
        // console.log('Ok');
        const elemP = document.createElement("p");
        elemP.id = "p1";
        let resultInput = document.getElementById('in1').value;
        // console.log(resultInput);
        elemP.innerText = resultInput;
        const inputElem = document.getElementById('in1').parentElement;
        const delElem = document.getElementById('in1');
        // console.log(inputElem);
        // console.log(delElem);
        inputElem.appendChild(elemP);
        inputElem.removeChild(delElem);
        let left = startX + a/2 * sm - 14; //10px половина ширины инпута, 4px отступы
        let bottom = a * sm / 2 + 140; // 100px до линии, 30px размер инпута, 10px отступ
        let input = document.getElementById('p1');
        input.style.cssText =
        `left: `+ left +`px; \
        bottom: `+ bottom +`px; \
        `;
    } else if (type == "b") {
        // console.log('Ok');
        const elemP2 = document.createElement("p");
        elemP2.id = "p2";
        let resultInput2 = document.getElementById('in2').value;
        // console.log(resultInput2);
        elemP2.innerText = resultInput2;
        const inputElem2 = document.getElementById('in2').parentElement;
        const delElem2 = document.getElementById('in2');
        // console.log(inputElem2);
        // console.log(delElem2);
        inputElem2.appendChild(elemP2);
        inputElem2.removeChild(delElem2);
        let left = startX + a * sm + b/2 * sm - 14; //10px половина ширины инпута, 4px отступы
        let bottom = b * sm / 2 + 140; // 100px до линии, 30px размер инпута, 10px отступ
        let input = document.getElementById('p2');
        input.style.cssText =
        `left: `+ left +`px; \
        bottom: `+ bottom +`px; \
      `;

    } else if (type != "a" || "b") {
        console.log('err');
    } else {
        console.log('err');
    }
};

// *** Функция проверки соответствия числа в инпуте заданнуму числе вверху ***

function checkNums(argument) { // argument - аргумент a или b или ab
    let id;
    let arg;
    let idTopArg;
    if (argument == "a"){
        arg = a;
        id = "in1";
        idTopArg = "A";
    } else if (argument == "b"){
        arg = b;
        id = "in2";
        idTopArg = "B";
    } else if (argument == "ab"){
        arg = ab;
        id = "AB"
    };
    const ids = id;
    // console.log(ids);
    const num = document.getElementById(''+ids+'');
    const topArg = document.getElementById(''+idTopArg+'');
    // console.log(num, num.value * 1, arg, argument);
    if (num.value * 1 == arg) {
        inputOnText(argument);
        topArg.style.background = 0;
        topArg.style.borderRadius = 0;
        if (idTopArg == "A") {
            getLine(b, 2); // рисуем линию 2
            getInput(2); //
        } else if (idTopArg == "B"){
            // console.log('тут');
            let summIn = document.createElement("p");
            // console.log(summIn, summIn.id, summIn.onsubmit);
            let resultInput = document.getElementById('AB').value;
            // console.log(resultInput);
            const inputElem = document.getElementById('AB').parentElement;
            // console.log(inputElem);
            const delElem = document.getElementById('AB');
            inputElem.removeChild(delElem);
            inputElem.appendChild(summIn);
            summIn.innerHTML = `
            <form onsubmit="checkSumm(); return false">\
            <input id="inAB" type='text' value="">\
            </form>
            `;
            setFocus('inAB');
        };
      
    } else {
        num.style.color = "red";
        topArg.style.background = "#ffa41d";
        topArg.style.borderRadius = "5px";
        // console.log('Надо выделить цветом');
    }
};

// *** Функция проверки суммы ***
function checkSumm(){
    let resSumm = document.getElementById('inAB');
    // console.log(resSumm, resSumm.value, ab);
    if (resSumm.value * 1 == ab){
        //удалить ипут и вопрос и написать ответ
        // console.log('удалить ипут и вопрос и написать ответ');
        resSumm.style.color = "black";
        const elem = document.createElement("p");
        elem.id = "AB";
        let resultInput = document.getElementById('inAB').value;
        // console.log(resultInput);
        elem.innerText = resultInput;
        const inputElem = document.getElementById('inAB').parentElement;
        const delElem = document.getElementById('inAB');
        // console.log(inputElem);
        // console.log(delElem);
        inputElem.appendChild(elem);
        inputElem.removeChild(delElem);
    
    } else if (resSumm.value * 1 != ab){
        resSumm.style.color = "red";
    }
};

// *** Функция проверки заполнения импутов только цифрами ***
function validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

// *** Функция установки фокуса в инпуты ***

function setFocus(param){
    document.getElementById(''+param+'').focus();
}

// Логика выполнения
    // Канвас
let canvas1 = document.getElementById('c1');
let ctx = canvas1.getContext('2d');
let run = new Image();

// Когда картинка загрузится
run.onload = function() {

    // ** Рисуем Спрайт **
    ctx.drawImage(run, 0, 250, 875, 83);
    // ** Рисуем линию 1 **
    getLine(a, 1); // 1 означает первую линию
    getInput(1);
    // *** Напишем числа вверху ***
    reNum(1);
    reNum(2);
    // *** Проверим соответствие введенного числа в первый импут числу А ***
        //вызывается после ввода и нажатия Enter, надо сделать автоматически!!!
    // *** Рисуем линию 2 ***
   
};
run.src = "sprite.png"; 
