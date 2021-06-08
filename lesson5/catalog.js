class Cart
{
    static #cartLines = [];

    static addLine(cartLine) {
        Cart.#cartLines.push(cartLine);
        Cart.render();
    }

    static calculateTotalPrice() {
        let total = 0;
        for (let cartLine of Cart.#cartLines) {
            total += cartLine.product.price * cartLine.amount;
        }

        return total;
    }

    static render() {
        let container = document.getElementById('cart');

        if (Cart.#cartLines.length === 0) {
            container.innerText = 'Корзина пуста';
            return;
        }

        let html = 'В корзине: ' + Cart.#cartLines.length + ' товаров ';
        html += 'на сумму ' + Cart.calculateTotalPrice() + ' рублей';
        container.innerHTML = html;
    }
}

class Catalog
{
    #products = [];

    addProduct(product) {
        this.#products.push(product);
    }

    render() {
        let container = document.getElementById('catalog');

        for (let [index, product] of this.#products.entries()) {
            let productEl = document.createElement('div');
            productEl.className = 'product';

            let nameEl = document.createElement('span');
            nameEl.innerHTML = product.name;
            productEl.appendChild(nameEl);

            let priceEl = document.createElement('span');
            priceEl.innerHTML = product.price + ' рублей';
            productEl.appendChild(priceEl);

            let buttonEl = document.createElement('button');
            buttonEl.dataset.index = index.toString();
            buttonEl.innerHTML = 'Купить';

            let that = this;
            buttonEl.addEventListener('click', (e) => {
                let index = e.target.dataset.index;
                Cart.addLine(new CartLine(that.#products[index], 1));
            });
            productEl.appendChild(buttonEl);

            container.appendChild(productEl);
        }
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

window.onload = () => {
    Cart.render();

    let product1 = new Product('Product 1', 100);
    let product2 = new Product('Product 2', 200);
    let product3 = new Product('Product 3', 300);

    let catalog = new Catalog();
    catalog.addProduct(product1);
    catalog.addProduct(product2);
    catalog.addProduct(product3);
    catalog.render();
};

