'use strict';

document
    .getElementById('task-1-btn')
    .addEventListener('click', () => {
        let a = prompt('Введите число');
        a = parseFloat(a);

        if (isNaN(a) || a < 0) {
            alert('Вы указали неверное число, повторите попытку');
            return false;
        }

        console.log(numToObj(a));
    });

document
    .getElementById('task-2-btn')
    .addEventListener('click', () => {
        let cart = new Cart();

        let product1 = new Product('Product 1', 100);
        let product2 = new Product('Product 2', 200);
        let product3 = new Product('Product 3', 300);

        cart.addProduct(new CartLine(product1, 1));
        cart.addProduct(new CartLine(product2, 2));
        cart.addProduct(new CartLine(product3, 3));

        console.log(cart.calculateTotalPrice());
    });

function numToObj(num)
{
    let obj = {};

    if (num > 999) {
        console.log('Number greater than 999')
        return obj;
    }

    obj.edinitci = num % 100 % 10;
    obj.desyatki = Math.floor(num % 100 / 10);
    obj.sotni = Math.floor(num / 100);

    return obj;
}

class Cart
{
    static #cartLines = [];

    addProduct(cartLine) {
        Cart.#cartLines.push(cartLine);
    }

    calculateTotalPrice() {
        let total = 0;
        for (let cartLine of Cart.#cartLines) {
            total += cartLine.product.price * cartLine.amount;
        }

        return total;
    }
}

class Product
{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class CartLine
{
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}