'use strict';

document
    .getElementById('task-1-btn')
    .addEventListener('click', () => {
        let arr = [];
        let n = 100;

        loop:
        for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    continue loop;
                }
            }

            arr.push(i);
        }

        alert(arr.join(' '));
    });

document
    .getElementById('task-2-3-btn')
    .addEventListener('click', () => {
        addToBasket('Product 1', 1, 100);
        addToBasket('Product 2', 2, 200);
        addToBasket('Product 3', 3, 300);
        alert(countBasketPrice());
    });

document
    .getElementById('task-5-btn')
    .addEventListener('click', () => {
        for (let i = 1; i <= 20; i++) {
            let str = '';
            for (let j = 1; j <= i; j++) {
                str += 'x';
            }
            console.log(str);
        }
    });

let basket = [];

function addToBasket(name, amount, price)
{
    basket.push({
        name:name,
        amount:amount,
        price:price
    })
}

function countBasketPrice()
{
    let total = 0;
    for (let product of basket) {
        total += product.price * product.amount;
    }

    return total;
}