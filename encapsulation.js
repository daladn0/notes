'use strict';

/**
 * Class product 
 * @param {String} title
 * @param {Number} price 
 * @param {Number} category 
 * @param {Number} discount
 * @param {Date} createdAt 
 */

function Product(
    title = 'Default title',
    price = 0,
    category = 1,
    discount = 0,
    createdAt = new Date()
) {
    const self = this;

    this.title = title;
    this.price = price;
    this.category = category;
    this.priceWithDiscount = getPriceWithDiscount(discount);
    
    const createdDate = createdAt;

    function getPriceWithDiscount(discount) {
        const price = self.price * ( 100 - discount ) / 100;
        return price;
    }

    /**
     * Method for update product
     * @param {String} title
     * @param {Number} price
     * @param {Number} category
     * @param {Number} discount
     * @return this
     */

    this.updateProduct = function ( title, price, category, discount = 0 ) {
        this.title = title;
        this.price = price;
        this.category = category;
        this.priceWithDiscount = getPriceWithDiscount(discount);

        return this;
    }

    /**
     * Method for get createdDate
     * @return {Date} createdDate
     */
    this.getCreatedDate = function() {
        return createdDate;
    }
}

let product = new Product('Coffee', 10, 2);
product.updateProduct(product.title, 20, product.category, 25);
console.log(product);
