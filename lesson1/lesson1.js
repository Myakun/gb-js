'use strict';

document
    .getElementById('task-1-btn')
    .addEventListener('click', () => {
       let Tc = prompt('Укажите температуру в градусах по Цельсию');
       Tc = parseFloat(Tc);

       if (isNaN(Tc)) {
           alert('Вы указали неверное число, повторите попытку');
           return false;
       }

       let Tf = (9 / 5) * Tc + 32;
       alert('Температура ' + Tc + ' по Цельсию = ' + Tf + ' по Фаренгейту:');
    });

document
    .getElementById('task-2-btn')
    .addEventListener('click', () => {
        let admin, name;
        name = 'Василий';
        admin = name;
        alert(admin);
    });