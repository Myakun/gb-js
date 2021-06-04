'use strict';

document
    .getElementById('task-3-btn')
    .addEventListener('click', () => {
       let a = prompt('Введите значение переменной "a"');
       a = parseFloat(a);
       if (isNaN(a)) {
           alert('Вы указали неверное число, повторите попытку');
           return false;
       }

        let b = prompt('Введите значение переменной "b"');
        b = parseFloat(b);
        if (isNaN(b)) {
            alert('Вы указали неверное число, повторите попытку');
            return false;
        }

        if (a >= 0 && b >= 0) {
            alert(a - b);
        } else if (a < 0 && b < 0) {
            alert(a * b);
        } else {
            alert(a + b);
        }
    });

document
    .getElementById('task-4-btn')
    .addEventListener('click', () => {
        let a = prompt('Введите значение переменной "a" от 0 до 15');
        a = parseInt(a);
        if (isNaN(a)) {
            alert('Вы указали неверное число, повторите попытку');
            return false;
        }

        if (a < 0 || a > 15) {
            alert('Значение "a" должно быть от 0 до 15');
            return false;
        }

        switch (a) {
            case 0:
                alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 1:
                alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 2:
                alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 3:
                alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 4:
                alert('4 5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 5:
                alert('5 6 7 8 9 10 11 12 13 14 15');
                break;
            case 6:
                alert('6 7 8 9 10 11 12 13 14 15');
                break;
            case 7:
                alert('7 8 9 10 11 12 13 14 15');
                break;
            case 8:
                alert('8 9 10 11 12 13 14 15');
                break;
            case 9:
                alert('9 10 11 12 13 14 15');
                break;
            case 10:
                alert('10 11 12 13 14 15');
                break;
            case 11:
                alert('11 12 13 14 15');
                break;
            case 12:
                alert('12 13 14 15');
                break;
            case 13:
                alert('13 14 15');
                break;
            case 14:
                alert('14 15');
                break;
            case 15:
                alert('15');
                break;
        }
    });

document
    .querySelectorAll('.task-5-6-btn')
    .forEach((el) => {
        el.addEventListener('click', () => {
            let a = prompt('Введите значение переменной "a"');
            a = parseFloat(a);
            if (isNaN(a)) {
                alert('Вы указали неверное число, повторите попытку');
                return false;
            }

            let b = prompt('Введите значение переменной "b"');
            b = parseFloat(b);
            if (isNaN(b)) {
                alert('Вы указали неверное число, повторите попытку');
                return false;
            }

            alert(mathOperation(a, b, el.dataset.operation));
        });
    })

document
    .getElementById('task-8-btn')
    .addEventListener('click', () => {
        let a = prompt('Введите значение числа, возводимого в степень');
        a = parseFloat(a);
        if (isNaN(a)) {
            alert('Вы указали неверное число, повторите попытку');
            return false;
        }

        let b = prompt('Введите в какую степень возвести');
        b = parseInt(b);
        if (isNaN(b)) {
            alert('Вы указали неверное число, повторите попытку');
            return false;
        }
        if (b < 1) {
            alert('Степень должна быть больше 1');
            return false;
        }

        alert(power(a, b));
    });

function delenie(a, b)
{
    return a / b;
}

function mathOperation(arg1, arg2, operation)
{
    switch (operation) {
        case 'delenie':
            return delenie(arg1, arg2);
        case 'raznost':
            return raznost(arg1, arg2);
        case 'slojenie':
            return slojenie(arg1, arg2);
        case 'umnojenie':
            return umnojenie(arg1, arg2);
    }
}

function raznost(a, b) {
    return a - b;
}

function power(val, pow)
{
    if (pow === 0) {
        return 1;
    }

    return val * power(val, pow - 1);
}

function slojenie(a, b)
{
    return a + b;
}

function umnojenie(a, b)
{
    return a * b;
}
